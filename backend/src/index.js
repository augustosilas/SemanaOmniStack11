const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors());
// Converto o corpo da requisição em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);

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
