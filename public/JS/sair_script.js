const btnSair = document.querySelector("#btn-sair");
btnSair.addEventListener("click", sair)

function sair() {
    Swal.fire({
        icon: 'warning',
        title: 'Tem certeza?',
        text: "Você está desconectando da sua conta!",
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sair',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear();
            window.location.href = "/index.html" 
        }
      })
}