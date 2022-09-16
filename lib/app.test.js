import request from 'supertest';
import app from './app.js';

it('Returns 404 not found on bad route', async () => {
  const { text, status } = await request(app).get('/api/v1/not-found');

  expect(status).toBe(404);
  expect(text).toBe('{\"status\":404,\"error\":\"Route/Resource Not Found\"}');
});

it('receives 404 when requesting unknown resource/method', async () => {
  await request(app)
  .patch('/api/v1/cats')
  .expect(404);
});
