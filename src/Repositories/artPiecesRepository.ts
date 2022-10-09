import { prisma } from "../Config/database";
import connection from "../Config/postgres";
import { artPieces } from "@prisma/client";

export async function insertPiece(artPiece: Omit<artPieces, "id">) {
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

export async function findPieceById(id: number) {
  const piece = await prisma.artPieces.findUnique({
    where: { id },
  });
  return piece;
}

export async function findUserPieces(userId: number) {
  const listPieces = await prisma.artPieces.findMany({
    where: { userId },
  });
  return listPieces;
}

export async function findAllPieces() {
  const { rows: listAllPieces } = await connection.query(
    'select users."userName", "artPieces"."userId", "artPieces".id, "artPieces".image, "artPieces".title from "artPieces" join users on "artPieces"."userId" = users.id'
  );
  return listAllPieces;
}
