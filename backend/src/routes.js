const express = require("express");

const OngsController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");

const SessionController = require("./controllers/SessionController");

const routes = express.Router();

routes.post("/session", SessionController.create);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

module.exports = routes;
