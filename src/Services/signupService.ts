import { users } from "@prisma/client";
import bcrypt from "bcrypt";
import { insertUser, findUser } from "../Repositories/userRepository";

export async function regiterUser(user: Omit<users, "id">) {
  const userData = await findUser(user.email);
  if (userData) {
    throw { code: "Unauthorized", message: "Email already registered" };
  }
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const newUser = {
    userName: user.userName,
    email: user.email,
    password: hashedPassword,
  };
  await insertUser(newUser);
}
