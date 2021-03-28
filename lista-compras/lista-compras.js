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
