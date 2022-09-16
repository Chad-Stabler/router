import request from 'supertest';
import app from './app.js';

it('GET will return candy objects', async () => {
    await request(app)
    .get('/api/candies')
    .expect(200);
  });

  it('POST / candies will add new cat', async () => {
    const newCandy ={
      name: 'Sweet ropes',
      sweetPoints: 'delicious',
    };
    const res = await request(app).post('/api/v1/candies').send(newCandy);
    expect(res.status).toBe(200);
  });

  it('DELETE /candies deletes candy object', async () => {
    const deleteCandy = {
      name: 'Twizzlers'
    };
    const res = await request(app).delete('/api/v1/candies').send(deleteCandy);
    expect(res.status).toBe(200);
  });