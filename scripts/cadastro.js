document
  .getElementById("formCadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
      document.getElementById("mensagem").innerHTML =
        "As senhas não coincidem!";
      return;
    }

    const novoUsuario = {
      id: Date.now(),
      nome: nome,
      email: email,
      senha: senha,
    };

    let usuarios =
      JSON.parse(localStorage.getItem("usuariosCadastrados")) || [];

    const existe = usuarios.find((user) => user.email === email);
    if (existe) {
      document.getElementById("mensagem").innerHTML =
        "Este e-mail já está cadastrado!";
      return;
    }

    usuarios.push(novoUsuario);

    localStorage.setItem("usuariosCadastrados", JSON.stringify(usuarios));

    document.getElementById("mensagem").innerHTML =
      "Cadastro feito com sucesso!";
    setTimeout(() => {
      window.location.href = "../pages/login.html";
    }, 3000);
  });
