const request = require("supertest");
const app = require("../src/index");

describe("GET /subtract", () => {
  test("Prueba que verifica si la resta de dos números es correcta", async () => {
    const response = await request(app).get("/subtract?a=10&b=4");
    expect(response.body.result).toBe(6);
  });

  test("Prueba que verifica que se maneje correctamente si falta uno de los parámetros", async () => {
    const response = await request(app).get("/subtract?a=10");
    expect(response.body.result).toBeNaN();
  });

  test("Prueba que verifica el manejo de caracteres no numéricos", async () => {
    const response = await request(app).get("/subtract?a=10&b=z");
    expect(response.body.result).toBeNaN();
  });
});
