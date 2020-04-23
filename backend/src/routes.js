const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngsController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);

routes.get("/ongs", OngsController.index);

/**
 * Justificativa:
 * O celebrate() é colocado antes do OngsController.create para seguir a ordem natural
 * primeiro valida os dados, depois cria a ong, iste é, uma ong só em criada se seus dados
 * passarem pela validação.
 */
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      nome: Joi.string().required(), //required() significa que a propriedade é obrigatória
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngsController.create
);

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown() //unknown() descarta informações que não precisam ser valdadas
  }),
  ProfileController.index
);

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentsController.index
);
routes.post("/incidents", IncidentsController.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
    })
  }),
  IncidentsController.delete
);

module.exports = routes;
