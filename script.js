let titulo = document.getElementById("titulo");
let mensagem = document.getElementById("mensagem");
let botao = document.getElementById("mudarTexto");

console.log(titulo.textContent); // Mostra o texto do <h1>
console.log(mensagem.textContent); // Mostra o texto do <p>

titulo.textContent = "🌍 Bem-vindo ao Meu Site Dinâmico!";
mensagem.style.color = "blue";
mensagem.style.fontWeight = "bold";

botao.addEventListener("click", function() {
  mensagem.textContent = "🪄 A mensagem mudou com JavaScript!";
  mensagem.style.color = "green";
});

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "✨ Este parágrafo foi criado via JavaScript!";
document.body.appendChild(novoParagrafo);

mensagem.remove();

// Adicionar uma classe CSS
titulo.classList.add("destaque");

// Remover classe
titulo.classList.remove("destaque");

// Alternar (liga/desliga)
titulo.classList.toggle("destaque");

// Alterar atributo
botao.setAttribute("title", "Clique para mudar a mensagem");


let nomeInput = document.getElementById("nome");
let saida = document.getElementById("saida");
let saudar = document.getElementById("saudar");

saudar.addEventListener("click", function() {
  let nome = nomeInput.value;
  saida.textContent = "Olá, " + nome + "! Seja bem-vindo 🚀";
});


let itens = document.querySelectorAll("li");

itens.forEach((item, i) => {
  item.textContent = "🚀 " + item.textContent + " (item " + (i+1) + ")";
});

let temaBtn = document.getElementById("tema");
temaBtn.addEventListener("click", function() {
  document.body.classList.toggle("modo-escuro");
});
