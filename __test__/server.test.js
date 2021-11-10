'use strict';

const { server } = require('../src/server')
const supertest = require('supertest');
const mockRequest = supertest(server);
const { db } = require('../src/models/index');

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});


describe('Web server', () => {

  test('Should respond with 404 status on an invalid method', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toBe(404);
  });


  // test if can create a food

  test('can add a food', async () => {
    const response = await mockRequest.post('/food').send({
        foodName: 'apple',
        foodCategory: 'fruit'
    });
    expect(response.status).toBe(201);
  });
  // test if can read food

  test('get all food', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  // test if can read one food
  test('get one record', async () => {
    const response = await mockRequest.get("/food/1")
    expect(response.status).toBe(200);
  });

  // test if can update a food
  test('update a record', async () => {
    const response = await mockRequest.put("/food/1").send({
        foodName: 'orange',
        foodCategory: 'fruit'
    });
    expect(response.status).toBe(201)
  });
  // test if can delete a food
  test('delete a record', async () => {
    const response = await mockRequest.delete("/food/1")
    expect(response.status).toBe(204)
  });


  
  // test if can create a clothes

  test('add a clothes', async () => {
    const response = await mockRequest.post('/clothes').send({
      clothesBrand: 'nike',
      clothesCategory: 'T-shirt',
      clothesSize:"large"
    });
    expect(response.status).toBe(201);
  });
  // test if can read clothes

  test('get all clothes', async () => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
  });

  // test if can read one clothes
  test('get one record', async () => {
    const response = await mockRequest.get("/clothes/1")
    expect(response.status).toBe(200);
  });

  // test if can update a clothes
  test('update a record', async () => {
    const response = await mockRequest.put("/clothes/1").send({
      clothesBrand: 'polo',
      clothesCategory: 'T-shirt',
      clothesSize:"large"
    });
    expect(response.status).toBe(201)
  });
  // test if can delete a food
  test('delete a record', async () => {
    const response = await mockRequest.delete("/clothes/1")
    expect(response.status).toBe(204)
  });
}); 