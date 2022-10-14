import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";
import { findUser } from "../Repositories/userRepository";

export async function userLogin(user: Omit<users, "id" | "userName">) {
  const userData = await findUser(user.email);
  if (!userData) {
    throw { code: "Not Valid", message: "Email not registered" };
  }
  if (!bcrypt.compareSync(user.password, userData.password)) {
    throw { code: "Unauthorized", message: "Password does not match" };
  }

  const token = createToken(userData.id);
  return { token, userId: userData.id, userName: userData.userName };
}

export function createToken(id: number) {
  const chaveSecreta = process.env.JWT_SECRET;
  const token = jwt.sign({ id }, chaveSecreta);
  return token;
}
