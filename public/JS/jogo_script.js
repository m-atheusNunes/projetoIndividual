async function buscarImagem() {
    let listaImagem = await fetch("/times/listarEscudos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())

    listaImagem.push(...listaImagem) // Duplicando todas as imagens da lista

    // Embaralhando as imagens para não ficar padronizado
    listaImagem.sort(() => {
        return 0.5 - Math.random();
    });

    criarJogo(listaImagem); // Chamando a função que cria o jogo
}

const grade = document.querySelector("#jogo");
const btn_jogar = document.querySelector("#btn-jogar");
const btn_jogarNovamente = document.querySelector("#btn-jogarNovamente");
const marcadores = document.querySelector("#marcadores");
let ponto;
let movimentos;
let escolhidas = [];

// Função que cria o jogo e suas funcionalidades
function criarJogo(listaImagem) {
    btn_jogar.style.display = "none";
    marcadores.style.display = "block"
    grade.innerHTML = ``;
    ponto = 0;
    movimentos = 0;
    pontos.innerText = ponto;
    exibir_movimentos.innerHTML = movimentos;

    // Percorrendo a minha lista de imagens para criar as cartas
    for (var i = 0; i < listaImagem.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = listaImagem[i].nome;
        carta.src = "./assets/Imagens/card_jogo.png"; // Escondendo qual o time da carta
        carta.addEventListener("click", escolherCarta); // Adicionando uma ação ao clicar na carta
        grade.appendChild(carta); // Adicionando a carta criada no laço de repetição como elemente filho da grade
    }

    setTimeout(virarCartas, 1000); // Adicionando delay na função para virar as cartas

    // Função para mostrar as cartas por 2 segundos
    function virarCartas() {
        for (var i = 0; i < listaImagem.length; i++) {
            let carta = document.getElementById(i);
            carta.src = listaImagem[i].urlImagem;
            setTimeout(virarCarta, 2000, carta); // Intervalo de tempo que as cartas ficarão viradas
        }
    }

    // Função para virar as cartas novamente
    function virarCarta(carta) {
        carta.src = "./assets/Imagens/card_jogo.png";
    }

    // Função que acontece quando clicar na carta
    function escolherCarta() {
        let carta = this; // Referencia ao objetivo que teve o eventListenner
        carta.src = listaImagem[carta.id].urlImagem;
        escolhidas.push(carta);

        carta.removeEventListener("click", escolherCarta); // Removendo um evento de clique quando a carta for selecionada

        // Ve
        if (escolhidas.length == 2) {
            movimentos++; // Adicionando 1 ao contador de movimentos usados pelo jogador
            exibir_movimentos.innerText = movimentos;
            setTimeout(() => {
                let carta1 = escolhidas[0]; // Atribuindo a carta escolhida à posição 0 da lista de escolhidas
                let carta2 = escolhidas[1]; // Atribuindo a carta escolhida à posição 1 da lista de escolhidas

                // Verificando se as cartas escolhidas são um par
                if (carta1.name == carta2.name && carta1.id != carta2.id) {
                    carta1.src = "./assets/Imagens/preto.png";
                    carta2.src = "./assets/Imagens/preto.png";
                    carta1.removeEventListener("click", escolherCarta);
                    carta2.removeEventListener("click", escolherCarta);
                    ponto++
                    pontos.innerText = ponto;
                } else {
                    carta1.src = "./assets/Imagens/card_jogo.png";
                    carta2.src = "./assets/Imagens/card_jogo.png";
                    carta1.addEventListener("click", escolherCarta);
                    carta2.addEventListener("click", escolherCarta);
                }

                // Verificação para encerrar o jogo
                if (ponto == listaImagem.length / 2) {
                    fetch("/jogo/tentativa", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            idUsuarioServer: sessionStorage.getItem("idUsuario"),
                            movUsadosServer: movimentos
                        })
                    }).then(res => {
                        if(res.ok) {
                            alert("Sua tentativa foi registrada!")
                        } else {
                            alert("Não foi possível registrar sua tentativa")
                        }
                    })
                    
                    alert("Parabéns! Você achou todos os pares!");
                    grade.innerHTML = ``;
                    btn_jogarNovamente.style.display = "block"
                }

                escolhidas = []; // Limpando a lista de cartas escolhidas
            }, 400);
        }
    }
}
// window.location.href = "/jogo.html"