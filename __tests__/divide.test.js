const request = require("supertest");
const app = require("../src/index");

describe("GET /divide", () => {
  test("Prueba que verifica si la división de dos números es correcta", async () => {
    const response = await request(app).get("/divide?a=8&b=2");
    expect(response.body.result).toBe(4);
  });

  test("Prueba que verifica que se maneje correctamente si falta uno de los parámetros", async () => {
    const response = await request(app).get("/divide?a=8");
    expect(response.body.result).toBeNaN();
  });

  test("Prueba que verifica cómo se maneja la división por cero", async () => {
    const response = await request(app).get("/divide?a=8&b=0");
    expect(response.body.result).toBe(Infinity);
  });

  test("Prueba que verifica el manejo de caracteres no numéricos", async () => {
    const response = await request(app).get("/divide?a=8&b=xyz");
    expect(response.body.result).toBeNaN();
  });
});
