listaDados = fetch("/jogo/buscarDados", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(res => res.json())

for(var i = 1; i < listaDados.length; i++) {
    dadosRanking.datasets[0].data.push(listaDados[i].movUsados)
}

console.log(listaDados[1])

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

    console.log(dadosRanking.datasets[0].data)