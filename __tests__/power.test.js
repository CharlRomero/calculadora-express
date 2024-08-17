const request = require("supertest");
const app = require("../src/index");

describe("GET /power", () => {
  test("Prueba que verifica si el cálculo de la potencia de un número es correcto", async () => {
    const response = await request(app).get("/power?a=2&b=3");
    expect(response.body.result).toBe(8);
  });

  test("Prueba que verifica que se maneje correctamente si falta uno de los parámetros", async () => {
    const response = await request(app).get("/power?a=2");
    expect(response.body.result).toBeNaN();
  });

  test("Prueba que verifica el manejo de caracteres no numéricos", async () => {
    const response = await request(app).get("/power?a=2&b=hello");
    expect(response.body.result).toBeNaN();
  });
});
