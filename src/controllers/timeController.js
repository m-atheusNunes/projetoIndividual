var timeModel = require("../models/timeModel");

var sessoes = [];

function listar(req, res) {
    timeModel.listar()
    .then(function (resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado foi encontrado!")
        }
    }).catch(
        function(erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function listarJogadores(req, res) {
    var nomeTime = req.body.nomeTimeServer;
    timeModel.listarJogadores(nomeTime)
    .then(function (resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado foi encontrado!")
        }
    }).catch(
        function(erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    listar,
    listarJogadores
}