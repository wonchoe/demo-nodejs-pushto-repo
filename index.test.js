const request = require('supertest');
const app = require('./index');

describe('GET /ping', () => {
    it('responds with pong', async () => {
        const res = await request(app).get('/ping');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'pong');
    });
});
