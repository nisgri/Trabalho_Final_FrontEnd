document.addEventListener("DOMContentLoaded", function () {
  // Load cart from localStorage
  let carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];

  const resumoDiv = document.getElementById("resumo-pedido");

  if (carrinho.length === 0) {
    resumoDiv.innerHTML += "<p>Carrinho vazio</p>";
  } else {
    carrinho.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = `${item.nome} - R$ ${item.preco},00`;
      resumoDiv.appendChild(p);
    });
    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    const pTotal = document.createElement("p");
    pTotal.innerHTML = `<strong>Total: R$ ${total.toFixed(2).replace(".", ",")}</strong>`;
    resumoDiv.appendChild(pTotal);
  }
});

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
      mensagem.textContent = "E-mail inválido!";
      return;
    }

    // Clear cart on successful purchase
    localStorage.removeItem("meuCarrinho");

    mensagem.style.color = "green";
    mensagem.textContent = "Compra realizada com sucesso!";
    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);
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
