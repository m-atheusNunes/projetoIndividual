async function buscarTime() {
    var listaTime = await fetch("/times/listar", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())

    for (var i = 0; i < listaTime.length; i++) {
        gerarTime(listaTime[i])
    }
}

function gerarTime(time) {
    content.innerHTML += `
        <div class="card">
            <div class="topCard">
                <h2 class="title">${time.nome}</h2>
                <span class="secondText">${time.pais}</span> 
            </div>
            <div id="div_img" style="background: url(${time.urlImagem}) center/cover; width: 100%; height: 250px;"></div>
            <div class="bottomCard">
                <p class="bottomText">
                <b>Estádio:</b> ${time.estadio}<br>
                <b>Data de fundação:</b> ${time.dtFundacao} <br>
                <b>Títulos da Libertadores:</b> ${time.qtdTitulos} <br>
                <b>Artilheiro:</b> ${time.nomeJogador} (${time.gols} gols)
                </p>
            </div>
        </div>
    `
}