// Função normal

// inserir texto id.innerText / inserir html id.innerHTML

// exibeTexto("Aula 6");

// function exibeTexto(texto) {
//   if (!texto) return;
//   const titulo = document.getElementById("texto");
//   titulo.innerText = texto;
// }

// exibeTexto("De novo");

// const n1 = parseFloat(prompt("Digite o primeiro número"));
// const n2 = parseFloat(prompt("Digite o segundo número"));

// console.log("Resultado da soma: ", soma(n1, n2));
// console.log("Resultado da soma: ", multiplicacao(n1, n2));

// // function soma(n1, n2) {
// //   return n1 + n2;
// // }

// // function multiplicacao(n1, n2) {
// //   return n1 * n2;
// // }

// // ****** FUNÇÕES ANÔNIMAS ******
// // nome declarado antes. todo o resto é igual
// // não tem hoisting/elevação.

// // const soma = function() {

// // }

// // ****** FUNÇÕES ARROW ****** =>

// const soma = (numero1, numero2) => {
//   return numero1 + numero2;
// }

// EX - Trocar função normal para ARROW

const listaCompras = [];
const inputNome = document.getElementById("nomeItem");

document.getElementById("nomeItem").onkeydown = function (event) {
  if (event.keyCode == 13) {
    adicionaItem(event.target.value);
    event.preventDefault();
    return false;
  }
};

function adicionaItem(item) {
  if (!item) {
    alert("Nome obrigatório!");
  } else {
    inputNome.value = "";
    listaCompras.push(item.toLowerCase());
    atualizaLista();
  }
}

function atualizaLista() {
  const ulTag = document.getElementById("listaCompras");
  let listaLi = "";

  for (item of listaCompras) {
    listaLi += `<li>${item}</li>`;
  }
  ulTag.innerHTML = listaLi;
}

function ordenar() {
  listaCompras.sort();
  atualizaLista();
}

function limpaLista() {
  listaCompras.splice(0);
  atualizaLista();
}

function limpaUltimo() {
  listaCompras.splice(-1);
  atualizaLista();
}

const limpaUltimo = () => {
  listaCompras.splice(-1);
  atualizaLista();
};
