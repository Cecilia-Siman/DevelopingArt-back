import { Request, Response } from "express";
import { userLogin } from "../Services/loginService";
import { regiterUser } from "../Services/signupService";

export async function signup(req: Request, res: Response) {
  const { userName, email, password } = req.body;
  const userData = { userName, email, password };
  await regiterUser(userData);
  res.sendStatus(201);
}

export async function login(req: Request, res: Response) {
  const userData = req.body;
  const token = await userLogin(userData);
  res.send(token).status(200);
}
