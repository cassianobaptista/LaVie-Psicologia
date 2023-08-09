const express = require("express");
const routes = express.Router();
const pacientesController = require("../controllers/pacientesController");


// Pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacientePorId)
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);


module.exports = routes;