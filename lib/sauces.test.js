import request from 'supertest';
import app from './app.js';

it('GET will return sauce objects', async () => {
    await request(app)
    .get('/api/sauces')
    .expect(200);
  });

  it('POST / sauces will add new sauce', async () => {
    const newSauce ={
      name: 'Sweet sauce',
      flavor: 'sweet',
    };
    const res = await request(app).post('/api/v1/sauces').send(newSauce);
    expect(res.status).toBe(200);
  });

  it('DELETE /sauces deletes sauce object', async () => {
    const deleteSauce = {
      name: 'Soy Sauce'
    };
    const res = await request(app).delete('/api/v1/sauces').send(deleteSauce);
    expect(res.status).toBe(200);
  });