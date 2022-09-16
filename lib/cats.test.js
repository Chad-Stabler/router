import request from 'supertest';
import app from './app.js';

it('GET will return cat object', async () => {
    await request(app)
    .get('/api/cats')
    .expect(200);
  });

  it('POST / cats will add new cat', async () => {
    const newCat ={
      name: 'argon',
      flavor: 'delicious',
    };
    const res = await request(app).post('/api/v1/cats').send(newCat);
    expect(res.status).toBe(200);
  });

  it('DELETE /cats deletes cat object', async () => {
    const deleteCat = {
      name: 'Jimmy'
    };
    const res = await request(app).delete('/api/v1/cats').send(deleteCat);
    expect(res.status).toBe(200);
  });