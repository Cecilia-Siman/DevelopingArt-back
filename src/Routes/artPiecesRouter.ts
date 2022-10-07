import { Router } from "express";
import {
  createPiece,
  updatePiece,
  deletePiece,
  findUserPieces,
  findAllPieces,
} from "../Controllers/artPiecesController";
import artPieceSchema from "../Schemas/artPieceSchema";
import { validateSchema } from "../Middlewares/schemaValidator";

const artPiecesRouter = Router();

artPiecesRouter.post("/pieces/create", validateSchema(artPieceSchema), createPiece);
artPiecesRouter.put("/pieces/update", validateSchema(artPieceSchema), updatePiece);
artPiecesRouter.delete("/pieces/delete", deletePiece);
artPiecesRouter.get("/:userId/pieces/find", findUserPieces);
artPiecesRouter.get("/pieces/findAll", findAllPieces);

export default artPiecesRouter;
