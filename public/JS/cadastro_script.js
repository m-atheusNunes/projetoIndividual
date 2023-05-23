document.querySelector(".btn-cadastro").addEventListener("click", () => {
    var nome = ipt_nome.value;
    var sobrenome = ipt_sobrenome.value;
    var email = ipt_email.value;
    var confirmarEmail = ipt_confirmarEmail.value
    var senha = ipt_senha.value;
    var confirmarSenha = ipt_confirmarSenha.value

    if (nome == "" || sobrenome == "" || email == "" || confirmarEmail == "" || senha == "" || confirmarSenha == "") {
        alert("Os campos não podem ser vazios!")
    } else if (confirmarEmail != email) {
        alert("A confirmação do email não é igual ao email")
    } else if (confirmarSenha != senha) {
        alert("A confirmação da senha não é igual a senha")
    } else if (email.indexOf("@") == -1 || email.startsWith("@") == true || email.endsWith("@") == true || email.startsWith(".") == true || email.endsWith(".") == true || email.length <= 3) {
        alert("Insira um email válido!")
    } else if (senha.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres")
    } else {
        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nomeServer: nome,
                sobrenomeServer: sobrenome,
                emailServer: email,
                senhaServer: senha
            })
        }).then(res => {
            if (res.ok) {
                alert("Cadastro efetuado! Redirecionando...")
                setInterval(redirecionarLogin(), 3000)
            } else if(!res.ok) {
                alert("Email já em uso!")
            }
            console.log(res)
        })
    }
})

function redirecionarLogin() {
    window.location.href = "/index.html"
}