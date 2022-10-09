import { Request, Response } from "express";
import {
  newPiece,
  alterPiece,
  removePiece,
} from "../Services/artPiecesService/pieceService";
import {
  listUserPieces,
  listAllPieces,
} from "../Services/artPiecesService/findPiecesService";

export async function createPiece(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  console.log(userId);
  const pieceData = { ...req.body, userId };
  console.log(pieceData);
  await newPiece(userId, pieceData);
  res.sendStatus(201);
}

export async function updatePiece(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const pieceData = { ...req.body, userId };
  await alterPiece(userId, pieceData);
  res.sendStatus(201);
}

export async function deletePiece(req: Request, res: Response) {
  const userId: number = res.locals.userId;
  const { id: pieceId } = req.body;
  await removePiece(userId, pieceId);
  res.sendStatus(200);
}

export async function findUserPieces(req: Request, res: Response) {
  const userId: number = Number(req.params.userId);
  const listPieces = await listUserPieces(userId);
  res.send(listPieces).status(200);
}

export async function findAllPieces(req: Request, res: Response) {
  const listPieces = await listAllPieces();
  res.send(listPieces).status(200);
}
