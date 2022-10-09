import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { findUserById } from "../Repositories/userRepository";

import dotenv from "dotenv";
dotenv.config();

export async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  const secretkey = process.env.JWT_SECRET;

  if (!token) {
    throw { code: "Unauthorized", message: "Missing token" };
  }

  let dados: any = jwt.verify(token, secretkey);
  const userInfo = await findUserById(dados.id);

  if (!userInfo) {
    throw { code: "Not Found", message: "User not found" };
  }
  res.locals.userId = userInfo.id;

  next();
}
