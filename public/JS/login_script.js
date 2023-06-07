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
            Swal.fire({
                icon: 'success',
                title: 'Login realizado!',
                text: 'Redirecionando...',
            })
            return res.json();
        } else if(email == "") {
            Swal.fire({
                icon: 'error',
                title: 'Insira um email!',
                text: 'O email não pode ser vazio.',
              })
        } else if(senha == "") {
            Swal.fire({
                icon: 'error',
                title: 'Insira uma senha!',
                text: 'A senha não pode ser vazia.',
              })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Email ou senha inválidos!',
                text: 'Verifique se foram digitados corretamente.',
              })
        }
    }).then(resposta =>{
        setInterval(() => {
            efetuarLogin(resposta)
        }, 3000)
    })
})

function efetuarLogin(resposta) {
    sessionStorage.setItem("idUsuario", resposta.id);
    sessionStorage.setItem("Nome", resposta.nome);
    sessionStorage.setItem("Email", resposta.email);
    window.location.href = "/home.html"
}

