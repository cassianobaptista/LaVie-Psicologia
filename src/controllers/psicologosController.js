const Psicologos = require("../models/psicologos");
const bcrypt = require("bcryptjs");

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
        const { nome, email, senha, apresentacao } = req.body;

        const newSenha = bcrypt.hashSync(senha, 10);

        const psicologoCadastrado = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });

        return res.status(201).json(psicologoCadastrado);
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