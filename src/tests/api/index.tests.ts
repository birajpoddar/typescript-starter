import supertest from 'supertest';
import app from '../../api/index';

describe('/api Tests', () => {
  const request = supertest(app);

  it('expect /api to return StatusCode 200', async () => {
    const response = await request.get('/api');
    expect(response.statusCode).toBe(200);
  });

  it('expect /api to return the message', async () => {
    const response = await request.get('/api');
    expect(response.text).toEqual('API Endpoint is running');
  });
});
