// Load cart from localStorage
let carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];

function salvarCarrinho() {
  localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));
}

function calcularTotal() {
  return carrinho.reduce((total, item) => total + item.preco, 0);
}

function renderCarrinho() {
  const container = document.getElementById("carrinho-itens");
  container.innerHTML = "";

  if (carrinho.length === 0) {
    container.innerHTML = '<p class="text-center">Carrinho vazio</p>';
    document.getElementById("total").textContent = "0,00";
    return;
  }

  carrinho.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "card mb-3";
    itemDiv.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center">
                    <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; object-fit: contain; margin-right: 10px;">
                    <div>
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">R$ ${item.preco},00</p>
                    </div>
                </div>
                <button class="btn btn-danger btn-remove" data-index="${index}">Remover</button>
            </div>
        `;

    const btnRemove = itemDiv.querySelector(".btn-remove");
    btnRemove.addEventListener("click", () => {
      carrinho.splice(index, 1);
      salvarCarrinho();
      renderCarrinho();
    });

    container.appendChild(itemDiv);
  });

  document.getElementById("total").textContent = calcularTotal()
    .toFixed(2)
    .replace(".", ",");
}

// Handle checkout
document.getElementById("btn-checkout").addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
    return;
  }
  // Redirect to checkout page
  window.location.href = "checkout.html";
});

// Initial render
renderCarrinho();
