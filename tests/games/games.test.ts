import { resetDb } from "../helpers/resetDb";
import { api } from '../helpers/connectApi';
import { createGameData, createGameResults, insertGameInDb } from "./games.factory";
import httpStatus from "http-status";
import { getBetById, insertBetInDb } from "../bets/bets.factory";
import { insertParticipantInDb } from "../participants/participants.factory";


beforeEach(async ()=>{
    await resetDb()
})

describe("route POST /games",()=>{

    it("should return CREATED",async () => {
        const result = await api.post("/games").send(createGameData())

        expect(result.statusCode).toBe(httpStatus.CREATED)
        expect(result.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            homeTeamName: expect.any(String),
            awayTeamName: expect.any(String),
            homeTeamScore: expect.any(Number), 
            awayTeamScore: expect.any(Number), 
            isFinished: expect.any(Boolean),
        }))
    })

    it("should return BAD REQUIST if body don't have homeTeamName", async () => {
        const result = await api.post("/games").send({homeTeamName: "Corithians"})

        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })

    it("should return BAD REQUIST if body don't have awayTeamName", async () => {
        const result = await api.post("/games").send({awayTeamName: "Avai"})

        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })
})

describe("route GET /games", () => {

    it("should return an array of games objects", async ()=>{
        await insertGameInDb()
        const result = await api.get("/games")

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                homeTeamName: expect.any(String),
                awayTeamName: expect.any(String),
                homeTeamScore: expect.any(Number), 
                awayTeamScore: expect.any(Number), 
                isFinished: expect.any(Boolean),
            })
        ]))
    })

    it("should return an empty object", async () => {
        const result = await api.get("/games")

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toBeInstanceOf(Array)
        expect(result.body).toHaveLength(0)
    })
})

describe("route GET /games by id",()=>{

    it("should return an specific game", async () => {
        const game = await insertGameInDb()
        const result = await api.get(`/games/${game.id}`)

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toEqual(expect.objectContaining({
            id: game.id,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            homeTeamName: expect.any(String),
            awayTeamName: expect.any(String),
            homeTeamScore: expect.any(Number), 
            awayTeamScore: expect.any(Number), 
            isFinished: expect.any(Boolean),
        
        }))
    })

    it("should return NOT FOUND if game doesn't exist", async () => {
        const result = await api.get(`/games/${Math.round(Math.random()*10 + 1)}`)

        expect(result.statusCode).toBe(httpStatus.NOT_FOUND)

    })

    it("should return BAD REQUEST if id is not a number", async () => {
        const result = await api.get(`/games/a`)

        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)

    })
})

describe("route POST /games/:id/finish",()=>{

    it("should return OK",async ()=>{
        const game = await insertGameInDb()
        const participant1 = await insertParticipantInDb()
        const bet1 = await insertBetInDb(game.id,participant1.id,participant1.balance)

        const participant2 = await insertParticipantInDb()
        const bet2 = await insertBetInDb(game.id,participant2.id,participant2.balance)

        const result = await api.post(`/games/${game.id}/finish`).send(createGameResults(bet1.homeTeamScore,bet1.awayTeamScore))

        const winner = await getBetById(bet1.id)
        const loser = await getBetById(bet2.id)

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            homeTeamName: expect.any(String),
            awayTeamName: expect.any(String),
            homeTeamScore: expect.any(Number),
            awayTeamScore: expect.any(Number),
            isFinished: expect.any(Boolean),
        }))
        expect(loser.status).toBe("LOST")
        expect(winner.status).toBe("WON")
        expect(loser.amountWon).toBe(0)
        const amountWon = Math.floor(((bet1.amountBet + bet2.amountBet))*(1 - 0.3))
        expect(winner.amountWon).toBe(amountWon)
    })

    it("should return NOT FOUND when game doens't exist",async ()=>{
        const game = await insertGameInDb()

        const result = await api.post(`/games/${game.id+1}/finish`).send(createGameResults())
        
        expect(result.statusCode).toBe(httpStatus.NOT_FOUND)

    })

    it("should return BAD REQUEST when game hava already finished",async ()=>{
        const game = await insertGameInDb(true)

        const result = await api.post(`/games/${game.id}/finish`).send(createGameResults())

        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })
})