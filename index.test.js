const request = require('supertest');
const { app } = require('./index');
let server;

beforeAll((done) => {
    server = app.listen(4000, done); // запускай на іншому порту, щоб не було конфлікту
});

afterAll((done) => {
    server.close(done); // закрий сервер після всіх тестів
});

describe('GET /ping', () => {
    it('responds with pong', async () => {
        const res = await request(server).get('/ping');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'pong');
    });
});