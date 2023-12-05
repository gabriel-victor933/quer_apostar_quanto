import { insertParticipantInDb } from "../participants/participants.factory";
import { api } from "../helpers/connectApi";
import { resetDb } from "../helpers/resetDb";
import { insertGameInDb } from "../games/games.factory";
import { createBetData } from "./bets.factory";
import httpStatus from "http-status";

beforeEach(async () => {
    await resetDb()
})

describe("route POST /bets", () => {

    it("should return CREATED", async ()=> {
        const participant = await insertParticipantInDb()
        const game = await insertGameInDb()

        const result = await api.post("/bets").send(createBetData(game.id,participant.id,participant.balance))
        expect(result.statusCode).toBe(httpStatus.CREATED)
        expect(result.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            homeTeamScore: expect.any(Number),
            awayTeamScore: expect.any(Number),
            amountBet: expect.any(Number), 
            gameId: expect.any(Number), 
            participantId: expect.any(Number),
            status: expect.stringMatching("PENDING"), 
            amountWon: null
        }))
    })

    it("should return NOT FOUND if participant doens't exist", async () => {
        const game = await insertGameInDb()

        const result = await api.post("/bets").send(createBetData(game.id,1,1000))

        expect(result.statusCode).toBe(httpStatus.NOT_FOUND)
    })

    it("should return NOT FOUND if game dont't exist", async () => {
        const participant = await insertParticipantInDb()

        const result = await api.post("/bets").send(createBetData(1,participant.id,participant.balance))

        expect(result.statusCode).toBe(httpStatus.NOT_FOUND)
    })

    it("should return BAD REQUEST if participant dont have enough funds", async () => {
        const participant = await insertParticipantInDb()
        const game = await insertGameInDb()

        const result = await api.post("/bets").send(createBetData(game.id,participant.id,participant.balance,false))
        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })

    it("should return BAD REQUEST if game have already finish", async () => {
        const participant = await insertParticipantInDb()
        const game = await insertGameInDb(true)

        const result = await api.post("/bets").send(createBetData(game.id,participant.id,participant.balance))
        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })
})