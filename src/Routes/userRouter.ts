import { Router } from "express";
import { signup, login } from "../Controllers/userController";
import signupSchema from "../Schemas/signupSchema";
import loginSchema from "../Schemas/loginSchema";
import { validateSchema } from "../Middlewares/schemaValidator";

const userRouter = Router();

userRouter.post("/signup", validateSchema(signupSchema), signup);
userRouter.post("/login", validateSchema(loginSchema), login);

export default userRouter;
