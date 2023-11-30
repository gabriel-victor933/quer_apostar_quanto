import { Request, Response } from "express";
import gamesServices from "@/services/gamesServices";
import httpStatus from "http-status";

export async function postGames(req: Request, res: Response){
    const game = await gamesServices.postGames(req.body);
    res.status(httpStatus.CREATED).send(game)
}