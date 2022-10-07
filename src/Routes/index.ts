import { Router } from "express";
import userRouter from "./userRouter";
import artPiecesRouter from "./artPiecesRouter";

const router = Router();

router.use("/", userRouter);
router.use("/", artPiecesRouter);

export default router;
