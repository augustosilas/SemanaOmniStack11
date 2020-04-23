const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
// Converto o corpo da requisição em JSON
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
/**
 *
 * Banco de Dados
 * Entidades:
 *  - ONG
 *  - Caso (incident)
 *
 * Funcionalidades:
 *  * Login de ONG
 *  - Logout de ONG
 *  - Cadastro de ONG
 *  - Cadastrar novos casos
 *  - Deletar casos
 *  - Listar casos específicos de uma ONG
 *  - Entrar em contato com a ONG
 */

/**
 * Usar a biblioteca celebrate para validação.
 * Por baixo dos panos, a biblioteca celabrate usa a biblioteca join.
 * Join é uma biblioteca de validação para JS.
 *
 * Celebrate itegra o Join com o express.
 *
 * Validação é colocada somente em rotas de criação e alteração
 */

/**
 * Usar jest para realização de testes
 *
 * Teste de integração: testa por completo uma funcionalidade da aplicação
 * Teste unitário: testa um pedaço da aplicação de forma muito isolada
 *
 * Usar a bilioteca supertest para realizar as requisições no teste da aplicação
 */
