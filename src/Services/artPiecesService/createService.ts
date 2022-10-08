import { artPieces } from "@prisma/client";
import { insertPiece } from "../../Repositories/artPiecesRepository";

export async function newPiece(piece: Omit<artPieces, "id">) {
    await insertPiece(piece);
}
