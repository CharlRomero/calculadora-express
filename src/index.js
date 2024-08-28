const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Calculadora Express");
});

app.get("/sum", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.json({ result: NaN });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.json({ result: NaN });
  }

  const sum = numA + numB;

  res.json({ result: sum });
});

app.get("/subtract", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.json({ result: NaN });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.json({ result: NaN });
  }

  const result = numA - numB;
});

app.get("/multiply", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.json({ result: NaN });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.json({ result: NaN });
  }

  const result = numA * numB;
  res.json({ result: result });
});

app.get("/divide", (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.json({ result: NaN });
  }

  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.json({ result: NaN });
  }

  if (numB === 0) {
    return res.json({ result: Infinity });
  }

  const result = numA / numB;
  res.json({ result: result });
});

app.get('/power', (req, res) => {
  const { a, b } = req.query;

  if (a === undefined || b === undefined) {
    return res.json({ result: NaN });
  }

  const base = parseFloat(a);
  const exponent = parseFloat(b);

  if (isNaN(base) || isNaN(exponent)) {
    return res.json({ result: NaN });
  }

  const result = Math.pow(base, exponent);
  res.json({ result: result });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });
}

module.exports = app;
