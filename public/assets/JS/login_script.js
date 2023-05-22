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
            efetuarLogin()
        } else if(email == "") {
            alert("O campo do email está vazio!")
        } else if(senha == "") {
            alert("O campo da senha está vazio!")
        } else {
            alert(`Email ou senha errados!\nOu a conta não existe!`)
        }
    })
})
function efetuarLogin() {
        window.location.href = "/home.html"
    }