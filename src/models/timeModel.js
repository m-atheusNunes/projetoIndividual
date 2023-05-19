var database = require("../database/config");

function listar() {
    var instrucao = `SELECT * FROM timeCampeao LEFT JOIN jogadorArtilheiro ON timeCampeao.nome = jogadorArtilheiro.fkTime ORDER BY qtdTitulos DESC;`;
    return database.executar(instrucao);
}

function listarJogadores(nomeTime) {
    var instrucao = `SELECT * FROM jogadorArtilheiro WHERE fkTime = '${nomeTime}';`;
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarJogadores
}