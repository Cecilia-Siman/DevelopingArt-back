import { artPieces } from "@prisma/client";
import {
  insertPiece,
  updatePiece,
  findPieceById,
  deletePiece,
} from "../../Repositories/artPiecesRepository";

export async function newPiece(piece: Omit<artPieces, "id">) {
  await insertPiece(piece);
}

export async function alterPiece(userId: number, piece: artPieces) {
  await findOwner(piece.id, userId);
  await updatePiece(piece);
}

export async function removePiece(userId: number, pieceId: number) {
  await findOwner(pieceId, userId);
  await deletePiece(pieceId);
}

async function findOwner(pieceId: number, userId: number) {
  const pieceData = await findPieceById(pieceId);
  if (!pieceData) {
    throw {
      code: "Not Valid",
      message: "Id does not correspond to any art piece",
    };
  }
  if (pieceData.userId !== userId) {
    throw {
      code: "Unauthorized",
      message: "Art piece does not belong to user",
    };
  } else {
    return true;
  }
}
