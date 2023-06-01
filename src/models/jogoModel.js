var database = require("../database/config");

function tentativa(idUsuario, movUsados) {
    var subInstrucao = `SELECT (COUNT(id) + 1)`
    var instrucao = `INSERT INTO tentativa (id, fkUsuario, fkJogo, movUsados) ${subInstrucao}, ${idUsuario}, 1, ${movUsados} FROM tentativa`

    return database.executar(instrucao);
}


function buscarDados() {
    var instrucao = `SELECT tentativa.fkUsuario, tentativa.movUsados, usuario.nome, usuario.sobrenome, usuario.email FROM tentativa JOIN usuario ON tentativa.fkUsuario = usuario.id ORDER BY movUsados LIMIT 10;`
    
    return database.executar(instrucao);
}

module.exports = {
    tentativa,
    buscarDados
}