// Load cart from localStorage
let carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];

function adicionarCarrinho(produto) {
  const itemExistente = carrinho.find(item => item.id === produto.id);

  if (itemExistente) {
    itemExistente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  salvarCarrinho();
  renderCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));
}

function calcularTotal() {
  return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
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
    if (!item.quantidade) item.quantidade = 1;
    
    const itemDiv = document.createElement("div");
    itemDiv.className = "card mb-3";
    itemDiv.innerHTML = `
            <div class="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div class="d-flex align-items-center">
                    <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; object-fit: contain; margin-right: 10px;">
                    <div>
                        <h5 class="card-title">${item.nome}</h5>
                        <p class="card-text">
                          ${item.quantidade}x R$ ${item.preco},00
                          <small class="text-muted">(Subtotal: R$ ${item.preco * item.quantidade},00)</small>
                        </p>
                    </div>
                </div>
                <div class="d-flex align-items-center justify-content-between w-100-mobile gap-2">
                  <div class="d-flex align-items-center bg-light border rounded-pill px-2">
                      <button class="btn btn-sm btn-link text-dark p-1 btn-diminuir" data-index="${index}" style="text-decoration: none;">-</button>
                      <span class="mx-2 fw-bold" style="min-width: 20px; text-align: center;">${item.quantidade}</span>
                      <button class="btn btn-sm btn-link text-dark p-1 btn-aumentar" data-index="${index}" style="text-decoration: none;">+</button>
                  </div>
                  <button class="btn btn-sm btn-outline-danger btn-remove px-3" data-index="${index}">
                      Remover
                  </button>
              </div>
            </div>
        `;

    const btnRemove = itemDiv.querySelector(".btn-remove");
    btnRemove.addEventListener("click", () => {
      carrinho.splice(index, 1);
      salvarCarrinho();
      renderCarrinho();
    });

    const btnDiminuir = itemDiv.querySelector(".btn-diminuir");
    btnDiminuir.addEventListener("click", () => {
      if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1;
      } else {
        carrinho.splice(index, 1);
      }
      salvarCarrinho();
      renderCarrinho();
    });

    const btnAumentar = itemDiv.querySelector(".btn-aumentar");
    btnAumentar.addEventListener("click", () => {
      carrinho[index].quantidade += 1;
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
    alert("Carrinho vazio.");
    return;
  }
  // Redirect to checkout page
  window.location.href = "checkout.html";
});

// Initial render
renderCarrinho();