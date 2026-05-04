document
  .getElementById("checkoutForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let endereco = document.getElementById("endereco").value;
    let cep = document.getElementById("cep").value;
    let pagamento = document.getElementById("pagamento").value;
    let mensagem = document.getElementById("mensagem");

    if (
      nome === "" ||
      email === "" ||
      endereco === "" ||
      cep === "" ||
      pagamento === ""
    ) {
      mensagem.style.color = "red";
      mensagem.textContent = "Preencha todos os campos!";
      return;
    }

    if (!email.includes("@")) {
      mensagem.style.color = "red";
      mensagem.textContent = "Email inválido!";
      return;
    }

    if (cep.length < 8) {
      mensagem.style.color = "red";
      mensagem.textContent = "CEP inválido!";
      return;
    }

    let response = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    let body = await response.json();

    if (body.erro == "true") {
      mensagem.style.color = "red";
      mensagem.textContent = "Esse CEP não existe";
      return;
    }

    mensagem.style.color = "green";
    mensagem.textContent = "Compra realizada com sucesso!";
  });
