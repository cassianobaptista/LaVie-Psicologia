const express = require("express");
const pacientesController = require("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const routes = express.Router();

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

// Atendimentos
routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.listarAtendimentoPorId);
routes.post("/atendimentos", atendimentosController.cadastrarAtendimento);


module.exports = routes;