const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/all", () => {
  test("responds with json", async () => {
    const response = await request(app)
      .get("/v1/todos/all")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(response.body).toEqual([]);
  });
});

const request = require("supertest");
const app = require("../../../src/server");

describe("GET /v1/todos/byid", () => {
  test("responds with json", async () => {
    // gültige ID aus Datenbank
    const validTodoId = "valid_todo_id_here";

    const response = await request(app)
      .get("/v1/todos/byid/${validTodoId}")
      .expect("Content-Type", /json/)
      .expect(200);

    // Annahme: Antwort ein einzelnes Todo-Objekt
    expect(response.body).toHaveProperty("id", validTodoId);
  });
});
