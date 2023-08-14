const Psicologos = require("../models/psicologos");

const psicologosController = {

    async listarPsicologos(req, res) {
        const listaDePsicologos = await Psicologos.findAll();
        res.status(200).json(listaDePsicologos);
    },

    async listarPsicologoPorId(req, res) {
        const { id } = req.params;
    
        const psicologo = await Psicologos.findByPk(id);
    
        if (!psicologo) {
            res.status(404).json("Psicólogo não encontrado");
            return;
        };

        res.status(200).json(psicologo);
    },

    async cadastrarPsicologo(req, res) {
        try {
        const { nome, email, senha, apresentacao } = req.body;
        const psicologoCadastrado = await Psicologos.create({
            nome,
            email,
            senha,
            apresentacao,
        });

        res.status(201).json(psicologoCadastrado);

        }catch(error){
            res.status(400).json("Todos os campos são obrigatórios.");
        };
    },

    async deletarPsicologo(req, res) {
        const { id } = req.params;

        const resultado = await Psicologos.destroy({
            where: {
                id,
            },
        });

        if (resultado === 0) {
            res.status(404).json("Psicólogo não encontrado para deletar");
        };

        res.status(200).json("Psicólogo deletado");
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentacao } = req.body;
    
        const [numeroDeLinhasAfetadas] = await Psicologos.update(
            {
                nome,
                email,
                senha,
                apresentacao,
            },
            {
                where: {
                    id,
                },
            }
        );
    
        if (numeroDeLinhasAfetadas === 0) {
            res.status(404).json("Psicólogo não encontrado para atualizar");
        };
    
        res.status(200).json("Psicólogo atualizado");
    },

};

module.exports = psicologosController;