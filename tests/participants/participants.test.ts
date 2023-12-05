import { api } from '../helpers/connectApi';
import { createParticipantData, insertParticipantInDb } from './participants.factory';
import { resetDb } from '../helpers/resetDb';
import httpStatus from 'http-status';



beforeEach(async ()=>{
    await resetDb();
})

describe("route POST /participants ", ()=>{
    it("Should return CREATED",async ()=>{
        const result = await api.post("/participants").send(createParticipantData())
        
        expect(result.statusCode).toBe(httpStatus.CREATED)
        expect(result.body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            name: expect.any(String),
            balance: expect.any(Number), 
        }))
    })

    it("should return BAD REQUEST if body don't have property name!", async () => {
        const result = await api.post("/participants").send({balance: 1200})
        
        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })

    it("should return BAD REQUEST if body don't have property balance!", async () => {
        const result = await api.post("/participants").send({name: "Gabriel"})
        
        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })

    it("should return BAD REQUEST if balance is less than R$ 10,00 !", async () => {
        const result = await api.post("/participants").send(createParticipantData(false))
        
        expect(result.statusCode).toBe(httpStatus.BAD_REQUEST)
    })
})

describe("route GET /participants",()=>{

    it("should return an array of participants objects", async () =>{
        await insertParticipantInDb()
        const result = await api.get("/participants")

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                name: expect.any(String),
                balance: expect.any(Number), 
            })
        ]))
    })

    it("should return an empty array", async () =>{
        const result = await api.get("/participants")

        expect(result.statusCode).toBe(httpStatus.OK)
        expect(result.body).toBeInstanceOf(Array)
        expect(result.body).toHaveLength(0);
        
    })
})