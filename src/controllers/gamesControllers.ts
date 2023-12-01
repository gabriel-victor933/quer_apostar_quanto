import { Request, Response } from "express";
import gamesServices from "../services/gamesServices";
import httpStatus from "http-status";

export async function postGames(req: Request, res: Response){
    const game = await gamesServices.postGames(req.body);
    res.status(httpStatus.CREATED).send(game)
}

export async function getGames(req: Request, res: Response){
    const game = await gamesServices.getGames();
    res.status(httpStatus.CREATED).send(game)
}

export async function getGameByid(req: Request & {id: number}, res: Response){
    const game = await gamesServices.getGameByid(req.id)
    res.status(httpStatus.OK).send(game)
}

export async function finishGame(req: Request & {id: number}, res: Response){
    const game = await gamesServices.finishGame(req.body,req.id)
    res.status(httpStatus.OK).send(game)
}