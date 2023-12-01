import { resetDb } from "../helpers/resetDb";
import { api } from '../helpers/connectApi';
import { createGameData, insertGameInDb } from "./games.factory";
import httpStatus from "http-status";


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