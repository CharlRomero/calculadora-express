const request = require('supertest');
const app = require('../src/index');

describe('Pruebas de Integración', () => {
  
  test('Debe realizar correctamente una serie de operaciones matemáticas', async () => {
    const sumResponse = await request(app).get('/sum?a=5&b=3');
    expect(sumResponse.body.result).toBe(8);

    const subtractResponse = await request(app).get('/subtract?a=8&b=2');
    expect(subtractResponse.body.result).toBe(6);

    const multiplyResponse = await request(app).get('/multiply?a=6&b=3');
    expect(multiplyResponse.body.result).toBe(18);

    const divideResponse = await request(app).get('/divide?a=18&b=3');
    expect(divideResponse.body.result).toBe(6);

    const powerResponse = await request(app).get('/power?a=2&b=3');
    expect(powerResponse.body.result).toBe(8);
  }, 10000);

  test('Debe manejar correctamente una operación que depende de un resultado previo', async () => {
    // Sumar 10 y 5
    const sumResponse = await request(app).get('/sum?a=10&b=5');
    expect(sumResponse.body.result).toBe(15);

    // Restar el resultado anterior con 3
    const subtractResponse = await request(app).get(`/subtract?a=${sumResponse.body.result}&b=3`);
    expect(subtractResponse.body.result).toBe(12);
  }, 10000);
});
