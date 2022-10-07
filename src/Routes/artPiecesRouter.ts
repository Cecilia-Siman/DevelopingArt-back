import { Router } from "express";
import {
  createPiece,
  updatePiece,
  findUserPieces,
  findAllPieces,
} from "../Controllers/artPiecesController";
import artPieceSchema from "../Schemas/artPieceSchema";
import { validateSchema } from "../Middlewares/schemaValidator";

const artPiecesRouter = Router();

artPiecesRouter.post(
  "/createPiece",
  validateSchema(artPieceSchema),
  createPiece
);
artPiecesRouter.put(
  "/updatePiece",
  validateSchema(artPieceSchema),
  updatePiece
);
artPiecesRouter.get("/:userId/userPieces", findUserPieces);
artPiecesRouter.get("/pieces", findAllPieces);

export default artPiecesRouter;
