/**
 * Método up é responsável pela criação da tabela
 *
 * Cria um arquivo migration responsável por criar uma única tabela (nesse caso a tabla 'ongs')
 *  - npx knex migrate:make nome_do_arquivo
 *
 * Cria a tabela
 *  - npx knex migrate:latest
 *
 * Desfaz a ultima migrate executade
 *  - npx knex migrate:rollback
 */

exports.up = function(knex) {
  return knex.schema.createTable("ongs", function(table) {
    table.string("id").primary();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("ongs");
};
