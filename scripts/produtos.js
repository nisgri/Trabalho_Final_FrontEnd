console.log("A pasta scripts foi conectada com sucesso!");

// Função para exibir notificação bonita
function mostrarNotificacao(mensagem) {
  const notificacao = document.createElement("div");
  notificacao.className = "notificacao-toast";
  notificacao.textContent = mensagem;
  document.body.appendChild(notificacao);

  setTimeout(() => {
    notificacao.remove();
  }, 3000);
}

const listaDestaque = [
  {
    id: 1,
    cor: "#f2d1a5",
    nome: "Violão",
    preco: 500,
    imagem:
      "https://static.vecteezy.com/system/resources/thumbnails/041/450/716/small/ai-generated-classic-acoustic-guitar-musical-instrument-png.png",
  },
  {
    id: 2,
    cor: "#5e5d5c",
    nome: "Guitarra",
    preco: 1200,
    imagem:
      "https://png.pngtree.com/png-clipart/20220930/ourmid/pngtree-elegant-black-guitar-png-image_6238607.png",
  },
  {
    id: 3,
    cor: "#5e5d5c",
    nome: "Baixo",
    preco: 900,
    imagem:
      "https://images.vexels.com/media/users/3/149497/isolated/preview/d74712c4fc7ed9478df390a37653cc25-icone-de-instrumento-musical-de-guitarra-baixo.png",
  },
  {
    id: 4,
    cor: "#878e9c",
    nome: "Flauta",
    preco: 300,
    imagem:
      "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-mastering-the-flute-a-comprehensive-practice-guide-png-image_12510353.png",
  },
  {
    id: 5,
    cor: "#5c5c5c",
    nome: "Piano",
    preco: 5000,
    imagem:
      "https://pianostomanik.com.br/wp-content/webp-express/webp-images/uploads/2024/08/CLP-895GP-1.png.webp",
  },
  {
    id: 6,
    cor: "#cfb5a7",
    nome: "Bateria",
    preco: 4000,
    imagem:
      "https://www.1papacaio.com.br/images/pngs/instrumentos-musicais/baterias/bateria-musica-001.png",
  },
  {
    id: 7,
    cor: "#5c5c5c",
    nome: "Teclado",
    preco: 3000,
    imagem:
      "https://sc04.alicdn.com/kf/Hf58578da6ba34be69476ba5f68923a37M.png",
  },
  {
    id: 8,
    cor: "#969dab",
    nome: "Triangulo",
    preco: 150,
    imagem:
      "https://www.pngarts.com/files/9/Musical-Triangle-Instrument-PNG-Free-Download.png",
  },
  {
    id: 9,
    cor: "#fbf4b7",
    nome: "Saxofone",
    preco: 1500,
    imagem:
      "https://static.vecteezy.com/system/resources/thumbnails/046/323/171/small/golden-saxophone-isolated-on-transparent-background-png.png",
  },
  {
    id: 10,
    cor: "#e08340",
    nome: "Violino",
    preco: 1000,
    imagem: "https://www.pngarts.com/files/4/Violin-PNG-Transparent-Image.png",
  },
  {
    id: 11,
    cor: "#f6e6be",
    nome: "Pandeiro",
    preco: 200,
    imagem:
      "https://png.pngtree.com/png-clipart/20250131/original/pngtree-wooden-tambourine-a-musical-instrument-filled-with-tradition-and-joy-png-image_20117105.png",
  },
  {
    id: 12,
    cor: "#fcf2cd",
    nome: "Trompete",
    preco: 800,
    imagem:
      "https://static.vecteezy.com/system/resources/thumbnails/049/796/226/small/a-golden-trumpet-on-a-transparent-background-free-png.png",
  },
];

console.table(listaDestaque);

const prateleira = document.getElementById("lista-produtos");

listaDestaque.forEach((instrumento) => {
  const col = document.createElement("div");
  col.className = "col-md-4 mb-4";

  col.innerHTML = `
    <div class="card h-100 shadow-sm">
        <img src="${instrumento.imagem}" class="card-img-top" alt="${instrumento.nome}" 
             style="height: 200px; object-fit: contain; background-color: ${instrumento.cor}; padding: 10px;">
        <div class="card-body text-center">
            <h5 class="card-title">${instrumento.nome}</h5>
            <p class="card-text text-success fw-bold">R$ ${instrumento.preco},00</p>
            <button class="btn btn-outline-primary w-100">Adicionar ao carrinho</button>
        </div>
    </div>
`;
  // Código anterior de criação do card...
  const botao = col.querySelector("button");
  botao.addEventListener("click", () => {
    let carrinho = JSON.parse(localStorage.getItem("meuCarrinho")) || [];
    const itemExistente = carrinho.find(item => item.id === instrumento.id);

    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      carrinho.push({ ...instrumento, quantidade: 1 });
    }

    localStorage.setItem("meuCarrinho", JSON.stringify(carrinho));
    mostrarNotificacao(
      `🎉 ${instrumento.nome} foi adicionado ao carrinho com sucesso!`,
    );
  });

  prateleira.appendChild(col); // Adiciona o card na tela
}); // Fecha o listaDestaque.forEach
