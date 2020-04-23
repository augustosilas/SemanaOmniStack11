const request = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback(); //elimina todos elementos do banco de dados
    await connection.migrate.latest(); //executa as migrations
  });

  afterAll(async () => {
    await connection.destroy();
  });

  // Testando se é possível a criação de uma nova ONG
  it("should be able to create a new ONG", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        nome: "APAD2",
        email: "augusto.fernande775@gmail.com",
        whatsapp: "67993212545",
        city: "Rio Verde",
        uf: "GO"
      });
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
