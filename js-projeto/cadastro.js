document.getElementById('form-cadastro').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cep = document.getElementById('cep').value;

    
    const novoUsuario = {
        id: Date.now(),
        nome: nome,
        email: email,
        senha: senha,
        cep: cep,
    };

    
    let usuarios = JSON.parse(localStorage.getItem('usuariosCadastrados')) || [];

    
    const existe = usuarios.find(user => user.email === email);
    if (existe) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    
    usuarios.push(novoUsuario);

    
    localStorage.setItem('usuariosCadastrados', JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "login.html";
});