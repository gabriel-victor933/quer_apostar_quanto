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
})