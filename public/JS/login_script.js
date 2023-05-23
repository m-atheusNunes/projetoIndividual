document.querySelector(".btn-login").addEventListener("click", () => {
    var email = ipt_email.value;
    var senha = ipt_senha.value;
    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(res => {
        if (res.ok) {
            return res.json();
        } else if(email == "") {
            alert("O campo do email está vazio!")
        } else if(senha == "") {
            alert("O campo da senha está vazio!")
        } else {
            alert(`Email ou senha errados!\nOu a conta não existe!`)
        }
    }).then(resposta =>{
        efetuarLogin(resposta)
    })
})

function efetuarLogin(resposta) {
    sessionStorage.setItem("idUsuario", resposta.id);
    sessionStorage.setItem("Nome", resposta.nome);
    sessionStorage.setItem("Email", resposta.email);
    window.location.href = "/home.html"
}

