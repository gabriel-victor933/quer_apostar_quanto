import { resetDb } from "../helpers/resetDb";
import { api } from '../helpers/connectApi';
import { createGameData } from "./games.factory";
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
            homeTeamScore: expect.any(Number), // inicialmente 0
            awayTeamScore: expect.any(Number), // inicialmente 0
            isFinished: expect.any(Boolean), // inicialmente false
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