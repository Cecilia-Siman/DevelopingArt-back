import {
  findAllPieces,
  findUserPieces,
} from "../../Repositories/artPiecesRepository";

export async function listAllPieces() {
  return await findAllPieces();
}

export async function listUserPieces(userId: number) {
  return findUserPieces(userId);
}
