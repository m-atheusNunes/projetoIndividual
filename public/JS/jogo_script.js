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
let movimentos = 0;
let escolhidas = [];
exibir_movimentos.innerHTML = 0;

function criarJogo(listaImagem) {
    ponto = 0
    pontos.innerText = ponto;

    grade.addEventListener("click", () => {
    })
    
    for(var i = 0; i < listaImagem.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = listaImagem[i].nome;
        carta.src = "./assets/Imagens/card_jogo.png";
        carta.addEventListener("click", escolherCarta);
        grade.appendChild(carta);
    }

    setTimeout(virarCartas, 1000);

  function virarCartas() {
    for (var i = 0; i < listaImagem.length; i++) {
      let carta = document.getElementById(i);
      carta.src = listaImagem[i].urlImagem;
      setTimeout(virarCarta, 2000, carta);
    }
  }

  function virarCarta(carta) {
    carta.src = "./assets/Imagens/card_jogo.png";
  }
    
    function escolherCarta() {
        let carta = this;
        carta.src = listaImagem[carta.id].urlImagem;
        escolhidas.push(carta);

        carta.removeEventListener("click", escolherCarta);
        
        if(escolhidas.length == 2) {    
            movimentos++;
            exibir_movimentos.innerText = movimentos;
            setTimeout(() => {
                let carta1 = escolhidas[0];
                let carta2 = escolhidas[1];
                
                if(carta1.name == carta2.name && carta1.id != carta2.id) {
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