const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    // extrai o número de páginas
    const { page = 1 } = request.query;

    // busca a quantidade de elementos
    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.nome",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { nome, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      nome,
      description,
      value,
      ong_id
    });

    return response.send({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incidents = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incidents.ong_id != ong_id) {
      return response.status(401).json({ error: "Operation not permited" });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
