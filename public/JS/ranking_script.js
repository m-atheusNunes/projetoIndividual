Chart.defaults.color = "#FFF";

async function reqDados() {
    listaDados = await fetch("/jogo/buscarDados", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())

    return listaDados
}


const posicoes = [
    '1º',
    '2º',
    '3º',
    '4º',
    '5º',
    '6º',
    '7º',
    '8º',
    '9º',
    '10º',
]

const dadosRanking = {
    labels: posicoes,
    datasets: [{
        label: 'Movimentos utilizados na tentativa',
        backgroundColor: '#DAA520',
        borderColor: '#DAA520',
        data: []
    }]
}

const graficoRanking = {
    type: 'bar',
    data: dadosRanking,
    options: {}
}

const myChart = new Chart(
    document.getElementById('rankingJogadores'),
    graficoRanking
    )
    
async function plotarDados() {
    var dados = await reqDados()
    myChart.data.datasets[0].data = [];
    for(var i = 0; i < dados.length; i++) {
        myChart.data.datasets[0].data.push(dados[i].movUsados);
    }

    myChart.update();
}