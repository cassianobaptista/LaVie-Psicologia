const express = require("express");
const routes = express.Router();
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");


// Pacientes
routes.get("/pacientes", pacientesController.listarPacientes);
routes.get("/pacientes/:id", pacientesController.listarPacientePorId)
routes.post("/pacientes", pacientesController.cadastrarPaciente);
routes.delete("/pacientes/:id", pacientesController.deletarPaciente);
routes.put("/pacientes/:id", pacientesController.atualizarPaciente);

// Psicologos
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologoPorId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);


module.exports = routes;