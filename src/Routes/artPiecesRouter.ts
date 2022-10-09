import { Router } from "express";
import {
  createPiece,
  updatePiece,
  deletePiece,
  findUserPieces,
  findAllPieces,
} from "../Controllers/artPiecesController";
import artPieceSchema from "../Schemas/artPieceSchema";
import newPieceSchema from "../Schemas/newPieceSchema";
import deletePieceSchema from "../Schemas/deletePieceSchema";
import { validateSchema } from "../Middlewares/schemaValidator";
import { validateToken } from "../Middlewares/tokenValidator";

const artPiecesRouter = Router();

artPiecesRouter.post(
  "/pieces/create",
  validateSchema(newPieceSchema),
  validateToken,
  createPiece
);
artPiecesRouter.put(
  "/pieces/update",
  validateToken,
  validateSchema(artPieceSchema),
  updatePiece
);
artPiecesRouter.delete(
  "/pieces/delete",
  validateToken,
  validateSchema(deletePieceSchema),
  deletePiece
);
artPiecesRouter.get("/:userId/pieces/find", findUserPieces);
artPiecesRouter.get("/pieces/findAll", findAllPieces);

export default artPiecesRouter;
