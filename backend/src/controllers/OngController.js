const crypto = require("crypto");

const connection = require("../database/connection");
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 *
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 *
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtro, Paginação)
 * Route Params: Parâmetros usados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
module.exports = {
  async index(request, response) {
    const ongs = await connection("ongs").select("*");

    return response.json(ongs);
  },

  async create(request, response) {
    const { nome, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");
    console.log("ok");
    await connection("ongs").insert({
      id,
      nome,
      email,
      whatsapp,
      city,
      uf
    });

    return response.json({ id });
  }
};
