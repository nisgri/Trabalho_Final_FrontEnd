console.log("A pasta js-projeto foi conectada com sucesso!");

const listaDestaque = [
    { nome: "Violão", preco: 500, imagem: "https://static.vecteezy.com/system/resources/thumbnails/041/450/716/small/ai-generated-classic-acoustic-guitar-musical-instrument-png.png" },
    { nome: "Guitarra", preco: 1200, imagem: "https://png.pngtree.com/png-clipart/20220930/ourmid/pngtree-elegant-black-guitar-png-image_6238607.png" },
    { nome: "Baixo", preco: 900, imagem: "https://images.vexels.com/media/users/3/149497/isolated/preview/d74712c4fc7ed9478df390a37653cc25-icone-de-instrumento-musical-de-guitarra-baixo.png" },
    { nome: "Flauta", preco: 300, imagem: "https://png.pngtree.com/png-vector/20240528/ourmid/pngtree-mastering-the-flute-a-comprehensive-practice-guide-png-image_12510353.png" },
    { nome: "Piano", preco: 5000, imagem: "https://pianostomanik.com.br/wp-content/webp-express/webp-images/uploads/2024/08/CLP-895GP-1.png.webp" },
    { nome: "Bateria", preco: 4000, imagem: "https://www.1papacaio.com.br/images/pngs/instrumentos-musicais/baterias/bateria-musica-001.png" },
    { nome: "Teclado", preco: 3000, imagem:"https://images.vexels.com/media/users/3/181739/isolated/preview/18dc943c20e55ed415d6fa3574dc66c4-teclado-profissional-preto-profissional.png "},
    { nome: "Triangulo", preco: 150, imagem:"https://www.pngarts.com/files/9/Musical-Triangle-Instrument-PNG-Free-Download.png" },
    { nome: "Saxofone", preco: 1500, imagem: "https://static.vecteezy.com/system/resources/thumbnails/046/323/171/small/golden-saxophone-isolated-on-transparent-background-png.png" },
    { nome: "Violino", preco: 1000, imagem: "https://www.pngarts.com/files/4/Violin-PNG-Transparent-Image.png" },
    { nome: "Pandeiro" , preco: 200, imagem: "https://png.pngtree.com/png-clipart/20250131/original/pngtree-wooden-tambourine-a-musical-instrument-filled-with-tradition-and-joy-png-image_20117105.png" },
    { nome: "Trompete" , preco: 800, imagem: "https://static.vecteezy.com/system/resources/thumbnails/049/796/226/small/a-golden-trumpet-on-a-transparent-background-free-png.png"},
];

console.table(listaDestaque);

const prateleira = document.getElementById('lista-produtos');

listaDestaque.forEach(instrumento => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    

col.innerHTML = `
    <div class="card h-100 shadow-sm">
        <img src="${instrumento.imagem}" class="card-img-top" alt="${instrumento.nome}" 
             style="height: 200px; object-fit: contain; background-color: #f8f9fa; padding: 10px;">
        <div class="card-body text-center">
            <h5 class="card-title">${instrumento.nome}</h5>
            <p class="card-text text-success fw-bold">R$ ${instrumento.preco},00</p>
            <button class="btn btn-outline-primary w-100">Adicionar Carrinho</button>
        </div>
    </div>
`;
// Código anterior de criação do card...
    const botao = col.querySelector('button');
    botao.addEventListener('click', () => {
        let carrinho = JSON.parse(localStorage.getItem('meuCarrinho')) || [];
        carrinho.push(instrumento);
        localStorage.setItem('meuCarrinho', JSON.stringify(carrinho));
        alert(`${instrumento.nome} foi adicionado ao carrinho!`);
    }); // Fecha o addEventListener

    prateleira.appendChild(col); // Adiciona o card na tela
}); // Fecha o listaDestaque.forEach

