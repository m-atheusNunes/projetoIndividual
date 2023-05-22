async function buscarImagem() {
    let listaImagem = await fetch("/times/listarEscudos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        listaImagem.push(...listaImagem)
        for(var contagem = 0; contagem < listaImagem.length; contagem++) {
            var sorteio = parseInt(Math.random() * listaImagem.length);
    }
    listaImagem.sort(() => {
        return 0.5 - Math.random();
    });
    criarJogo(listaImagem);
}

const grade = document.querySelector("#jogo");
let ponto;
let escolhidas = [];

function criarJogo(listaImagem) {
    ponto = 0
    pontos.innerText = ponto;

    for(var i = 0; i < listaImagem.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = listaImagem[i].nome;
        carta.src = "./assets/Imagens/card_jogo.png";
        carta.addEventListener("click", escolherCarta);
        grade.appendChild(carta);
    }

    function escolherCarta() {
        let carta = this;
        carta.src = listaImagem[carta.id].urlImagem;
        escolhidas.push(carta);

        if(escolhidas.length == 2) {    
            setTimeout(() => {
                let carta1 = escolhidas[0];
                let carta2 = escolhidas[1];

                if(carta1.name == carta2.name) {
                    carta1.src = "./assets/Imagens/preto.png";
                    carta2.src = "./assets/Imagens/preto.png";
                    carta1.removeEventListener("click", escolherCarta);
                    carta2.removeEventListener("click", escolherCarta);
                    ponto++
                    pontos.innerText = ponto;
                } else {
                    carta1.src = "./assets/Imagens/card_jogo.png";
                    carta2.src = "./assets/Imagens/card_jogo.png";
                }

                if(ponto == listaImagem.length / 2) {
                    alert("Parabéns! Você achou todos os pares!");
                    grade.innerHTML = ``;
                    window.location.href = "/jogo.html"
                }
                escolhidas = [];
            }, 400);
        }
    }
}