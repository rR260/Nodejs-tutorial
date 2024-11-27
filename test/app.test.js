const request = require('supertest');
const readData = require('../models/read-record');
const app = require('../app');

describe('GET /users', () => {
  it('should return a 200 status and a message', async () => {
    jest.spyOn(readData, "readData").mockResolvedValue([
      "1233"
    ]);
    const response = await request(app).get('/users');
    console.log("response", response.body);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello, world!');
  });
});

// describe('GET /user/:id', () => {
//   it('should return user data with id', async () => {
//     const response = await request(app).get('/user/123');
//     expect(response.status).toBe(200);
//     expect(response.body.id).toBe('123');
//     expect(response.body.name).toBe('John Doe');
//   });
// });
