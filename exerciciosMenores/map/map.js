// const numeros = ["10", "20", "30", "40"];

// const numerosComParse = numeros.map((numero) => parseFloat(numero));
// const dobroNumeros = numeros.map((numero) => numero * 2);

// console.log(numerosComParse);
// console.log(numeros);
// console.log(dobroNumeros);

// const produtos = [
//   {
//     id: 1,
//     nome: "galaxy 1",
//     preco: 5000,
//   },
//   {
//     id: 2,
//     nome: "galaxy 2",
//     preco: 3000,
//   },
//   {
//     id: 3,
//     nome: "galaxy 3",
//     preco: 7000,
//   },
// ];

// const valorDoDesconto = parseFloat(prompt("Digite o valor do desconto"));

// const produtosComDesconto = produtos.map((produto) => ({
//   ...produto,
//   precoComDesconto: produto.preco - valorDoDesconto,
// }));

// console.log(produtos);
// console.log(produtosComDesconto);

// const usuarios = [
//   {
//     id: 1,
//     nome: "Erich",
//     idade: 31,
//     email: "erichwill@gmail.com",
//   },
//   {
//     id: 2,
//     nome: "Ana",
//     idade: 33,
//     email: "Ana@gmail.com",
//   },
//   {
//     id: 3,
//     nome: "Laura",
//     idade: 10,
//     email: "Laura@gmail.com",
//   },
// ];

// const usuariosComSeguranca = usuarios.map((usuario) => ({
//   nomeUsuario: usuario.nome,
// }));

// console.log(usuarios);
// console.log(usuariosComSeguranca);

// const nomesUsuarios = usuarios.map((usuario) => usuario.nome);

// console.log(nomesUsuarios);

// 1. Crie um novo array onde contenha média de cada aluno e se ele foi aprovado ou não, considere média >= 5 para aprovado e menor que 5 reprovado.

// const alunos = [
//   {
//     id: 1,
//     nome: "Nathan",
//     nota1: 10,
//     nota2: 5,
//     nota3: 6,
//   },
//   {
//     id: 2,
//     nome: "Gabriel",
//     nota1: 10,
//     nota2: 8,
//     nota3: 8,
//   },
//   {
//     id: 3,
//     nome: "Otavio",
//     nota1: 4,
//     nota2: 3,
//     nota3: 5,
//   },
// ];

// const alunosComMedia = alunos.map((aluno) => {
//   let media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
//   return {
//     ...aluno,
//     media: media,
//     status: media >= 5 ? "Aprovado" : "Reprovado",
//   };
// });

// console.log(alunos);
// console.log(alunosComMedia);

// 2. Crie um código que vai receber um número e faça as operações aritméticas básicas(+, -, *, /) com cada número do array e exiba na tela o resultado de cada operação para cada número em um UL.

// const ulListaNumeros = document.getElementById("listaNumeros");

// const numeros = ["10", "20", "30", "40"];
// const numerosComParse = numeros.map((numero) => parseFloat(numero));
// const numeroInformado = parseFloat(prompt("Digite o valor"));

// const calculo = numerosComParse.map((numero) => {
//   return {
//     soma: numero + numeroInformado,
//     subtracao: numero - numeroInformado,
//     multiplicacao: numero * numeroInformado,
//     divisao: numero / numeroInformado,
//   };
// });

// console.log(numeros);
// console.log(numerosComParse);
// console.log(calculo);

// let listaNumerosLi = "";

// for (numero of calculo) {
//   listaNumerosLi += `
//   <li>
//     <h3>Soma: ${numero.soma}</h3>
//     <h3>Subtração: ${numero.subtracao}</h3>
//     <h3>Multiplicação: ${numero.multiplicacao}</h3>
//     <h3>Divisão: ${numero.divisao}</h3>
//   </li>
//   `;
// }

// ulListaNumeros.innerHTML = listaNumerosLi;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const ulListaNumeros = document.getElementById("listaNumeros");

// const produtos = [
//   {
//     id: 1,
//     nome: "galaxy 1",
//     preco: 5000,
//   },
//   {
//     id: 2,
//     nome: "galaxy 2",
//     preco: 3000,
//   },
//   {
//     id: 3,
//     nome: "galaxy 3",
//     preco: 7000,
//   },
// ];

// const aplicarDesconto = (numero, porcentagemDesconto) =>
//   numero - numero * (porcentagemDesconto / 100);
// const desconto = parseInt(prompt("Porcentagem do desconto"));
// const produtosComDesconto = produtos.map((produto) => ({
//   ...produto,
//   precoComDesconto: aplicarDesconto(produto.preco, desconto),
// }));

// for (produto of produtosComDesconto) {
//   ulListaNumeros.innerHTML += `
//   <li>
//   <h3>Nome: ${produto.nome}</h3>
//   <h3>Preço: ${produto.preco}</h3>
//   <h3>Preço com Desconto: ${produto.precoComDesconto}</h3>
//   </li>
//   `;
// }

const produtos = [
  {
    id: 1,
    nome: "Galaxy S21",
    preco: 5000,
  },
  {
    id: 2,
    nome: "Galaxy A51",
    preco: 1500,
  },
  {
    id: 3,
    nome: "Iphone 12",
    preco: 12000,
  },
  {
    id: 4,
    nome: "Iphone 6",
    preco: 3000,
  },
  {
    id: 5,
    nome: "Iphone 7",
    preco: 3500,
  },
];
