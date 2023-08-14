const Pacientes = require("./pacientes");
const Psicologos = require("./psicologos");
const Atendimentos = require("./atendimentos");

Pacientes.hasMany(Atendimentos, {
  foreignKey: "paciente_id",
});

Psicologos.hasMany(Atendimentos, {
  foreignKey: "psicologo_id",
});

Atendimentos.belongsTo(Pacientes, {
  foreignKey: "paciente_id",
});

Atendimentos.belongsTo(Psicologos, {
  foreignKey: "psicologo_id",
});

module.exports = { Pacientes, Psicologos, Atendimentos };
