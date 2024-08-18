# Calculadora Express

Este es un proyecto de una calculadora simple desarrollada con Express.js. La aplicación proporciona endpoints para realizar operaciones matemáticas básicas, como suma, resta, multiplicación, división y potenciación.

## Endpoints

- **GET `/`**
  - **Descripción:** Endpoint raíz que devuelve un mensaje de bienvenida.
  - **Respuesta:** `"Calculadora Express"`

- **GET `/sum`**
  - **Descripción:** Realiza la suma de dos números.
  - **Parámetros de Consulta:** `a` (número), `b` (número)
  - **Respuesta:** `{ result: <resultado> }`

- **GET `/subtract`**
  - **Descripción:** Realiza la resta de dos números.
  - **Parámetros de Consulta:** `a` (número), `b` (número)
  - **Respuesta:** `{ result: <resultado> }`

- **GET `/multiply`**
  - **Descripción:** Realiza la multiplicación de dos números.
  - **Parámetros de Consulta:** `a` (número), `b` (número)
  - **Respuesta:** `{ result: <resultado> }`

- **GET `/divide`**
  - **Descripción:** Realiza la división de dos números.
  - **Parámetros de Consulta:** `a` (número), `b` (número)
  - **Respuesta:** `{ result: <resultado> }`

- **GET `/power`**
  - **Descripción:** Calcula la potencia de un número elevado a otro.
  - **Parámetros de Consulta:** `a` (base), `b` (exponente)
  - **Respuesta:** `{ result: <resultado> }`

## Instalación

Para instalar y ejecutar esta aplicación, sigue los pasos a continuación:

1. **Clona el Repositorio:**

   ```bash
   git clone https://github.com/CharlRomero/calculadora-express
   cd calculadora-express

2. **Instala las Dependencias**
   
   ```bash
    pnpm install
3. **Ejecuta la Aplicación**
   
   ```bash
    pnpm run dev
4. **Ejecutar las pruebas**
   
   ```bash
    pnpm install
