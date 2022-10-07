import { prisma } from "../Config/database";
import { artPieces } from "@prisma/client";

export async function insertUser(artPiece: Omit<artPieces, "id">) {
  await prisma.artPieces.create({
    data: artPiece,
  });
}

export async function updatePiece(artPiece: artPieces) {
  await prisma.artPieces.update({
    where: { id: artPiece.id },
    data: artPiece,
  });
}

export async function deletePiece(id: number) {
  await prisma.artPieces.delete({
    where: { id },
  });
}

export async function findUserPieces(userId: number) {
  const listPieces = await prisma.artPieces.findMany({
    where: { userId },
  });
  return listPieces;
}

export async function findAllPieces() {
  const listAllPieces = await prisma.artPieces.findMany();
  return listAllPieces;
}
