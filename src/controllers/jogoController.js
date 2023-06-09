var jogoModel = require("../models/jogoModel");

var sessoes = [];

function tentativa(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var movUsados = req.body.movUsadosServer;

    if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    } else if (movUsados == undefined || movUsados < 10) {
        res.status(400).send("O movUsados está com valor errado!");
    } else {
        jogoModel.tentativa(idUsuario, movUsados)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function(erro) {
                    console.log(erro);
                    console.log("Houve um erro ao salvar a tentativa! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            )
    }
}

function buscarDados(req, res) {
    jogoModel.buscarDados()
    .then(function(resultado) {
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
    tentativa,
    buscarDados
}