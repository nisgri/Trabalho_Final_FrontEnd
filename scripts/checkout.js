document
  .getElementById("checkoutForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let cep = document.getElementById("cep").value.trim();
    let pagamento = document.getElementById("pagamento").value.trim();
    let estado = document.getElementById("estado").value.trim();
    let bairro = document.getElementById("bairro").value.trim();
    let logradouro = document.getElementById("logradouro").value.trim();
    let mensagem = document.getElementById("mensagem");

    if (
      nome == "" ||
      email == "" ||
      cep == "" ||
      pagamento == "" ||
      estado == "" ||
      bairro == "" ||
      logradouro == ""
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

    mensagem.style.color = "green";
    mensagem.textContent = "Compra realizada com sucesso!";
  });

document
  .getElementById("cep")
  .addEventListener("input", async function (event) {
    let cep = document.getElementById("cep").value;
    if (cep.length == 8) {
      let buscaCep = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
      let dados = await buscaCep.json();

      document.getElementById("estado").value = dados.estado;
      document.getElementById("bairro").value = dados.bairro;
      document.getElementById("logradouro").value = dados.logradouro;
      document.getElementById("complemento").value = dados.complemento;
    }
  });
