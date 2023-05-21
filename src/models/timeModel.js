var database = require("../database/config");

function listar() {
    var instrucao = `SELECT * FROM timeCampeao LEFT JOIN jogadorArtilheiro ON timeCampeao.nome = jogadorArtilheiro.fkTime ORDER BY qtdTitulos DESC;`;
    return database.executar(instrucao);
}

function listarEscudos() {
    var instrucao = `SELECT nome, urlImagem FROM timeCampeao ORDER BY RAND() LIMIT 10;`;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarEscudos
}