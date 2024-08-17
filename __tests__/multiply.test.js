const request = require("supertest");
const app = require("../src/index");

describe("GET /multiply", () => {
  test("Prueba que verifica si la multiplicación de dos números es correcta", async () => {
    const response = await request(app).get("/multiply?a=3&b=4");
    expect(response.body.result).toBe(12);
  });

  test("Prueba que verifica que se maneje correctamente si falta uno de los parámetros", async () => {
    const response = await request(app).get("/multiply?a=3");
    expect(response.body.result).toBeNaN();
  });

  test("Prueba que verifica el manejo de caracteres no numéricos", async () => {
    const response = await request(app).get("/multiply?a=abc&b=4");
    expect(response.body.result).toBeNaN();
  });
});
