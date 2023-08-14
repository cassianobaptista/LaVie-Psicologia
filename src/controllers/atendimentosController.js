const { Atendimentos, Pacientes, Psicologos } = require("../models");

const atendimentosController = {

    async listarAtendimentos(req, res) {
        const listaDeAtendimentos = await Atendimentos.findAll({
            include: [Pacientes, Psicologos]
        });
        res.status(200).json(listaDeAtendimentos);
    },

    async listarAtendimentoPorId(req, res) {
        const { id } = req.params;
    
        const atendimento = await Atendimentos.findByPk(id, {
            include: [Pacientes, Psicologos]
        });
    
        if (!atendimento) {
            res.status(404).json("Atendimento não encontrado");
            return;
        };

        res.status(200).json(atendimento);
    },

    async cadastrarAtendimento(req, res) {
        try {
        const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;
        const atendimentoCadastrado = await Atendimentos.create({
            paciente_id,
            psicologo_id,
            data_atendimento,
            observacao,
        });

        res.status(201).json(atendimentoCadastrado);

        }catch(error){
            res.status(400).json("Todos os campos são obrigatórios.");
        };
    },
    
};

module.exports = atendimentosController;