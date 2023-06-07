document.querySelector(".btn-cadastro").addEventListener("click", () => {
    var nome = ipt_nome.value;
    var sobrenome = ipt_sobrenome.value;
    var email = ipt_email.value;
    var confirmarEmail = ipt_confirmarEmail.value
    var senha = ipt_senha.value;
    var confirmarSenha = ipt_confirmarSenha.value

    if (nome == "" || sobrenome == "" || email == "" || confirmarEmail == "" || senha == "" || confirmarSenha == "") {
        Swal.fire({
            icon: 'error',
            title: 'Não foi possível cadastrar!',
            text: 'Verifique se todos campos estão preenchidos.',
          })
    } else if (email.indexOf("@") == -1 || email.startsWith("@") == true || email.endsWith("@") == true || email.startsWith(".") == true || email.endsWith(".") == true || email.length <= 3) {
        Swal.fire({
            icon: 'error',
            title: 'Email inválido!',
            text: 'Insira um endereço de email válido.',
          })
    } else if (confirmarEmail != email) {
        Swal.fire({
            icon: 'error',
            title: 'Confirmação de email inválida!',
            text: 'O email e a confirmação de email são diferentes.',
          })
    } else if (senha.length < 6) {
        Swal.fire({
            icon: 'error',
            title: 'Senha inválida!',
            text: 'A senha deve ter no mínimo 6 caracteres.',
          })
    } else if (confirmarSenha != senha) {
        Swal.fire({
            icon: 'error',
            title: 'Confirmação de senha inválida!',
            text: 'A senha e a confirmação de email são diferentes.',
          })
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
                Swal.fire({
                    icon: 'success',
                    title: 'Cadastro efetuado!',
                    text: 'Você será redirecionado a página de login.',
                })
                setInterval(() => {
                    redirecionarLogin()
                }, 3000)
            } else if(!res.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Email inválido!',
                    text: 'Esse email já está em uso.',
                  })
            }
        })
    }
})

function redirecionarLogin() {
    window.location.href = "/index.html"
}