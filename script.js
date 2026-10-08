const formulario = document.getElementById("formCadastro");
const tabelaUsuarios = document.getElementById("tabelaUsuarios");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;

  const novaLinha = document.createElement("tr");

  const colunaNome = document.createElement("td");
  colunaNome.textContent = nome;

  const colunaEmail = document.createElement("td");
  colunaEmail.textContent = email;

  const colunaTelefone = document.createElement("td");
  colunaTelefone.textContent = telefone;

  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaEmail);
  novaLinha.appendChild(colunaTelefone);

  tabelaUsuarios.appendChild(novaLinha);

  mensagem.textContent = "Usuário cadastrado com sucesso!";
  mensagem.style.color = "green";

  formulario.reset();
});
