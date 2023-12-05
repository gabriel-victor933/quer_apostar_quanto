import { Request, Response } from "express";
import gamesServices from "../services/gamesServices";
import httpStatus from "http-status";

export async function postGames(req: Request, res: Response){
    const game = await gamesServices.postGames(req.body);
    res.status(httpStatus.CREATED).send(game)
}

export async function getGames(req: Request & {query: {page?: string, finished?: string }}, res: Response){
    let finished 
    if(req.query.finished){
        finished = (req.query.finished == 'true' || req.query.finished == "True")
    }
    
    const page = (req.query.page || "1")
    
    const game = await gamesServices.getGames(finished,parseInt(page));
    res.status(httpStatus.OK).send(game)
}

export async function getGameByid(req: Request & {id: number}, res: Response){
    const game = await gamesServices.getGameByid(req.id)
    res.status(httpStatus.OK).send(game)
}

export async function finishGame(req: Request & {id: number}, res: Response){
    const game = await gamesServices.finishGame(req.body,req.id)
    res.status(httpStatus.OK).send(game)
}