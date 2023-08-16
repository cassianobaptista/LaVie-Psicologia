const Pacientes = require("../models/pacientes");

const pacientesController = {
    async listarPacientes(req, res) {
        const listaDePacientes = await Pacientes.findAll();
        res.status(200).json(listaDePacientes);
    },

    async listarPacientePorId(req, res) {
        const { id } = req.params;
        const paciente = await Pacientes.findByPk(id);
    
        if (!paciente) {
            res.status(404).json("Paciente não encontrado");
            return;
        };

        res.status(200).json(paciente);
    },

    async cadastrarPaciente(req, res) {
        try {
        const { nome, email, idade } = req.body;
        const pacienteCadastrado = await Pacientes.create({
            nome,
            email,
            idade,
        });

        res.status(201).json(pacienteCadastrado);
        }
        catch(error){
            res.status(400).json("Todos os campos são obrigatórios.");
        };
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;

        const resultado = await Pacientes.destroy({
            where: {
                id,
            },
        });

        if (resultado === 0) {
            res.status(404).json("Paciente não encontrado para deletar");
        };

        res.status(200).json("Paciente deletado");
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const { nome, email, idade } = req.body;
    
        const [numeroDeLinhasAfetadas] = await Pacientes.update(
            {
                nome,
                email,
                idade,
            },
            {
                where: {
                    id,
                },
            }
        );
    
        if (numeroDeLinhasAfetadas === 0) {
            res.status(404).json("Paciente não encontrado para atualizar");
        };
    
        res.status(200).json("Paciente atualizado");
    },
};


module.exports = pacientesController;