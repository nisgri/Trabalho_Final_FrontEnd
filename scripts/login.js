const form = document.getElementById("formLogin");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;

    const mensagem = document.getElementById("mensagem");

    const emailCorreto = "admin@gmail.com";

    const senhaCorreta = "1234";

    // VALIDAR CAMPOS VAZIOS
    if (email === "" || senha === "") {

        mensagem.innerHTML = "Preencha todos os campos.";

        mensagem.style.color = "red";

        return;
    }

    // VALIDAR LOGIN
    if (email === emailCorreto && senha === senhaCorreta) {

        mensagem.innerHTML = "Login realizado com sucesso!";

        mensagem.style.color = "green";

        setTimeout(() => {
        window.location.href = "../index.html";
        }, 3000);

    } else {

        mensagem.innerHTML = "Email ou senha inválidos.";

        mensagem.style.color = "red";
    }

});