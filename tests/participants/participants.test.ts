import supertest from 'supertest';
import app from '../../src/app';
import { createParticipantData, resetDb } from './participants.factory';
import httpStatus from 'http-status';

const api = supertest(app);

beforeEach(async ()=>{
    await resetDb();
})

describe("route POST /participants ", ()=>{
    it("Should return OK",async ()=>{
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