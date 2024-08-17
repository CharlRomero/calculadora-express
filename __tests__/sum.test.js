const request = require("supertest");
const app = require("../src/index");

describe("GET /sum", () => {
  test("Prueba que verifica si la suma de dos números es correcta", async () => {
    const response = await request(app).get("/sum?a=5&b=7");
    expect(response.body.result).toBe(12);
  });

  test("Prueba que verifica que se maneje correctamente si falta uno de los parámetros", async () => {
    const response = await request(app).get("/sum?a=5");
    expect(response.body.result).toBeNaN();
  });

  test("Prueba que verifica el manejo de caracteres no numéricos", async () => {
    const response = await request(app).get("/sum?a=x&b=7");
    expect(response.body.result).toBeNaN();
  });
});
