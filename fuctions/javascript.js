// const senhaPadrao = "ABCD";

// function autenticacao() {
//   const senha = pedeValor("Digite a senha");
//   if (senha === senhaPadrao) exibeTexto("Autenticado!");
//   else exibeTexto("Falha na autenticação.");
// }

// const n1 = pedeValor("Digite um número", true);

// exibeTexto(`O numero digitado foi: ${n1}, e o tipo dele é: ${typeof n1}`);

// function exibeTexto(texto = "") {
//   document.getElementById("mensagem").innerText = texto;
// }

// function pedeValor(texto, parseNumber = false) {
//   if (parseNumber) return parseFloat(prompt(texto));
//   else return prompt(texto);
// }

// // Laços de repetição: while, do-while, for.

// let numero1, numero2;

// numero1 = prompt("Digite o primeiro número");
// numero2 = prompt("Digite o segundo número");

// // while (numero1 < numero2) {
// //   console.log(`Número atual: ${numero1}`);
// //   numero1++;
// // }

// do {
//   console.log(`Número atual: ${numero1}`);
//   numero1++;
// } while (numero1 < numero2);

// EX1 Crie um código que recebe 2 números e exiba no console a mensagem 'Hello World' enquanto o primeiro número for menor que o segundo.

// let numero1, numero2;

// numero1 = prompt("Digite o primeiro número");
// numero2 = prompt("Digite o segundo número");

// while (numero1 < numero2) {
//   console.log("Hello World!");
//   numero1++;
// }

// EX2 Enunciado
// Faça um código que solicite uma senha formada de 4 números inteiros, caso a senha esteja correta apresente a mensagem:

// "Senha correta", caso contrário apresente a mensagem:
// "Senha inválida, tente novamente!"
// Obs: a senha de comparação, você mesmo pode definir.

// const senhaCorreta = "Password";
// let senhaDigitada = prompt("Digite sua senha");

// while (senhaDigitada !== senhaCorreta) {
//   alert("Senha inválida.");
//   senhaDigitada = prompt("Digite sua senha");
// }

// alert("Senha correta.");

// Crie um programa que recebe 2 números e exiba:

// Todos os números pares que existem entre o primeiro e o segundo número.
// A quantidade de números pares que existem entre o primeiro e segundo número.

// let numero1,
//   numero2,
//   quantidade = 0;

// numero1 = parseFloat(prompt("Digite o primeiro número"));
// numero2 = parseFloat(prompt("Digite o segundo número"));

// while (numero1 <= numero2) {
//   const temResto = numero1 % 2;
//   if (!temResto) {
//     console.log(`Número par: ${numero1}`);
//     quantidade++;
//   }
//   numero1++;
// }

// console.log(`Quantidade de números pares entre os números: ${quantidade}`);

// EX4 Crie um botão que ao ser clicado, apresente quatro opções:

// (a) consulta saldo (Deve exibir saldo atual)
// (b) saque (Deve exibir mensagem de sucesso/erro(caso não tenha saldo) e saldo após o saque)
// (c) depósito (Deve exibir mensagem de sucesso e saldo após o depósito)
// (d) sair. (Finaliza a janela com as opções)
// O saldo deve iniciar em R$ 0,00. A cada saque ou depósito o valor do saldo deve ser atualizado.

// let saldo = 0;
// let sair = false;

// function opcoesConta() {
//   while (!sair) {
//     const operacaoEscolhida = pedeValor(`Digite uma das opções abaixo: \n
//     (a) consulta saldo \n
//     (b) saque \n
//     (c) depósito \n
//     (d) sair`);

//     switch (operacaoEscolhida) {
//       case a:
//         exibeTexto(`O seu saldo atual é ${saldo}`);
//         break;

//       default:
//         break;
//     }
//   }
// }

// const numeros = [1, 2, 10, 15];
// const nomes = ["Nathan", "Erich", "Ana"];
// const produto1 = {
//   nome: "Arroz",
//   quantidade: 5,
// };

// const novoNumero = parseFloat(prompt("Digite o número"));
// const novoNumero2 = parseFloat(prompt("Digite outro número"));

// const novosNumeros = numeros.concat(novoNumero, novoNumero2);
// console.log(novosNumeros);

// // .concat -> concatenação delistas

// // .unshift() -> adiciona valor na primeira posição da lista.
// numeros.unshift(novoNumero);

// // .push() -> adiciona valor na última posição da lista.
// numeros.push(novoNumero2);

// // visualizar todo o array
// console.log(numeros);

// // visualizar o valor de uma posição específica.
// console.log(numeros[0]);

// 1. Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.

// const numero1 = parseFloat(prompt("Digite o número 1"));
// const numero2 = parseFloat(prompt("Digite o número 2"));
// const numero3 = parseFloat(prompt("Digite o número 3"));

// const arrayNumeros = [numero1, numero2, numero3];

// console.log(arrayNumeros);

// 2. Considere o array: [10,15,30]. Crie um script que pergunte 2 números ao usuário, insira o primeiro número no começo desse array e o segundo número no final.

// Dica: utilize push() e unshift()

// const array = [10, 15, 30];

// const numero1 = parseFloat(prompt("Digite o número 1"));
// const numero2 = parseFloat(prompt("Digite o número 2"));

// array.unshift(numero1);
// array.push(numero2);

// console.log(array);

// 3. Considere o array: [10,15,50]. Crie um script que pergunte 3 números ao usuário e utilize o concat() para unir os 2 arrays em 1 só.

// const array = [10, 15, 50];

// const numero1 = parseFloat(prompt("Digite o número 1"));
// const numero2 = parseFloat(prompt("Digite o número 2"));
// const numero3 = parseFloat(prompt("Digite o número 3"));

// const arraysAgrupados = array.concat(numero1, numero2, numero3);

// console.log(arraysAgrupados);

// ============================== BUSCA E REMOÇÃO ==============================

// const listaCompras = [
//   "Arroz",
//   "Feijão",
//   "Farofa",
//   "Brócolis",
//   "Arroz",
//   "Milho",
// ];

// const itemARetirar = prompt("Item a deletar");
// const listaSemItem = listaCompras.filter((item) => item !== itemARetirar);
// console.log(listaSemItem);

// const itemProcurado = prompt("Item a ser procurado");

// // Buscar índice do item

// // .indexOf -> retorna o primeiro índice do item encontrado
// const indiceItem = listaCompras.indexOf(itemProcurado);
// // .lastIndexOf -> retorna o último índice do item encontrado
// const ultimoIndice = listaCompras.lastIndexOf(itemProcurado);

// // .splice() -> remove o ítem pelo índice. (início da remoção, quantidade de ítens a deletar.)
// listaCompras.splice(ultimoIndice, 1);

// if (indiceItem > -1) alert(`O ${listaCompras[indiceItem]} está na lista.`);
// else alert("O item não está na lista");
// console.log(listaCompras);

// const itemAserDeletado = prompt("Item a ser deletado");
// let indice = 0;

// while (indice < listaCompras.length) {
//   if (listaCompras[indice] === itemAserDeletado) {
//     listaCompras.splice(indice, 1);
//   }
//   indice++
// }

// 1. Considere o array: ['Nathan', 'Gabriel', 'Matheus', 'Roberta']

// Crie um script que pede ao usuário um nome para busca, se o nome estiver na lista exiba uma mensagem: 'Nome encontrado', caso contrário exiba: 'Nome não encontrado'.
// Dica: Utilize indexOf()

// const nomes = ["Nathan", "Gabriel", "Matheus", "Roberta"];

// const nomeProcurado = prompt("Nome a ser procurado");

// const indiceNome = nomes.indexOf(nomeProcurado);

// if (indiceNome > -1) alert(`O nome "${nomes[indiceNome]}" está na lista.`);
// else alert("O item não está na lista");
// console.log(nomes);

// 2. Considere o array: ['Nathan', 'Gabriel', 'Nathan', 'Matheus', 'Roberta']

// Crie um script que pede ao usuário um nome para busca, exiba o primeiro índice onde o nome foi encontrado e o último índice.
// Dica: Utilize a função indexOf() e lastIndexOf()

// const nomes = ["Nathan", "Gabriel", "Nathan", "Matheus", "Roberta"];

// const nomeProcurado = prompt("Nome a ser procurado");

// const primeiroIndice = nomes.indexOf(nomeProcurado);
// const ultimoIndice = nomes.lastIndexOf(nomeProcurado);

// alert(`O primeiro índice é: ${primeiroIndice}, e o último é: ${ultimoIndice}`);
// console.log(nomes);

// 3. Considere o array: ['Nathan', 'Gabriel', 'Matheus', 'Roberta']

// Crie um script que pede ao usuário um nome para deletar, e exiba o novo array com o nome deletado.
// Dica: Utilize splice()

// const nomes = ["Nathan", "Gabriel", "Matheus", "Roberta"];

// const indexDelecao = nomes.indexOf(prompt("Nome a ser deletado"));

// if (indexDelecao > -1) nomes.splice(indexDelecao, 1);
// else alert("Nome não encontrado.");

// alert(nomes);

// ============================== BUSCA AVANÇADA ==============================

// BUSCA ÍNDICE

// const nomesSimples = ["Nathan", "Clarissa", "Flavio"];
// const clientes = [
//   {
//     nome: "Augusto",
//     email: "augusto@gmail.com",
//   },
//   {
//     nome: "João",
//     email: "joao@gmail.com",
//   },
//   {
//     nome: "Nathan",
//     email: "nathan@gmail.com",
//   },
//   {
//     nome: "Nathan Pedro",
//     email: "nathan@gmail.com",
//   },
// ];

// const nome = prompt("Nome do cliente a ser produrado");
// const email = prompt("Email do cliente a ser produrado");

// // .findIndex() -> busca com condição: (nome do objeto) => nomeDoArray.propriedade
// const indexCliente = clientes.findIndex((cliente) => cliente.nome === nome);

// console.log(indexCliente);

// const clienteEncontrado = clientes.find((cliente) => cliente.email === email);

// if (!clienteEncontrado) console.log("Cliente não encontrado.");
// else console.log("Cliente encontrado.", clienteEncontrado);

// BUSCA COM VÁRIAS RESPOSTAS FILTRO .filter()

// const clientesEncontrado = clientes.filter(
//   (cliente) => cliente.email === email
// );

// if (clientesEncontrado.length === 0) console.log("Email não encontrado.");
// else console.log(clientesEncontrado);

// 1. Considere o array:

// [
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'sal',
//         quantidade: 2
//     },
//     {
//         nome: 'pimenta',
//         quantidade: 1
//     }
// ]
// Crie um script que pede ao usuário o nome de um produto e exiba o produto se encontrado. Utilize find() ou findIndex().

// const produtos = [
//   {
//     nome: "pipoca",
//     quantidade: 1,
//   },
//   {
//     nome: "sal",
//     quantidade: 2,
//   },
//   {
//     nome: "pimenta",
//     quantidade: 1,
//   },
// ];

// const busca = prompt("Nome do produto a ser produrado");

// const produtoEncontrado = produtos.find((produto) => produto.nome === busca);

// if (produtoEncontrado) console.log("Produto encontrado:", produtoEncontrado);
// else console.log("Produto não encontrado.");

// 2. Considere o array:

// [
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'sal',
//         quantidade: 2
//     },
//     {
//         nome: 'pipoca',
//         quantidade: 1
//     },
//     {
//         nome: 'pimenta',
//         quantidade: 1
//     }
//    ]
// Crie um script que pede ao usuário o nome de um produto e exiba os produtos encontrados. Utilize filter().

// const produtos = [
//   {
//     nome: "pipoca",
//     quantidade: 1,
//   },
//   {
//     nome: "sal",
//     quantidade: 2,
//   },
//   {
//     nome: "pipoca",
//     quantidade: 1,
//   },
//   {
//     nome: "pimenta",
//     quantidade: 1,
//   },
// ];

// const busca = prompt("Nome do produto a ser produrado");

// const produtosEncontrados = produtos.filter(
//   (produto) => produto.nome === busca
// );

// console.log(produtosEncontrados);

// 1. Crie um script que pergunte 2 números ao usuário, utilize while ou do-while para exibir todos os números entre o primeiro e segundo número.

// const n1 = parseFloat(prompt("Digite o primeiro número."));
// const n2 = parseFloat(prompt("Digite o segundo número."));

// let index = 1;
// const numbers = [n1, n2];

// while (numbers.length < n2 - n1 + 1) {
//   numbers.push(numbers[0] + index);
//   index++;
// }

// console.log(numbers.sort());

// 2. Crie um script que pergunte 2 números ao usuário, utilize while ou do-while para exibir todos os números ímpar e par entre o primeiro e segundo número.

// const n1 = parseFloat(prompt("Digite o primeiro número."));
// const n2 = parseFloat(prompt("Digite o segundo número."));
// const numbers = [n1, n2];
// const even = [];
// const odd = [];
// let index = 1;
// let i = 0;

// while (numbers.length < n2 - n1 + 1) {
//   numbers.push(numbers[0] + index);
//   index++;
// }

// while (i < numbers.length) {
//   if (numbers[i] % 2 === 0) even.push(numbers[i]);
//   else odd.push(numbers[i]);
//   i++;
// }

// alert(`Os números pares são: ${even.sort()} e os ímpares são: ${odd.sort()}`);

// console.log(numbers.sort());
// console.log(even.sort());
// console.log(odd.sort());

// 3. Considere o array abaixo:

// [
//   {
//       nome: 'Arroz',
//       quantidade: 1
//   },
//   {
//       nome: 'Feijão',
//       quantidade: 1
//   },
//   {
//       nome: 'Açúcar',
//       quantidade: 1
//   },
//   {
//       nome: 'Milho',
//       quantidade: 1
//   },
//   {
//       nome: 'Arroz',
//       quantidade: 1
//   },
//   {
//       nome: 'Milho',
//       quantidade: 1
//   },
//   {
//       nome: 'Feijão',
//       quantidade: 1
//   },
//   {
//       nome: 'Açúcar',
//       quantidade: 1
//   },
// ]
// Crie um script onde o usuário passa o nome do produto que deseja remover e exiba a lista alterada.

// const lista = [
//   {
//     nome: "Arroz",
//     quantidade: 1,
//   },
//   {
//     nome: "Feijão",
//     quantidade: 1,
//   },
//   {
//     nome: "Açúcar",
//     quantidade: 1,
//   },
//   {
//     nome: "Milho",
//     quantidade: 1,
//   },
//   {
//     nome: "Arroz",
//     quantidade: 1,
//   },
//   {
//     nome: "Milho",
//     quantidade: 1,
//   },
//   {
//     nome: "Feijão",
//     quantidade: 1,
//   },
//   {
//     nome: "Açúcar",
//     quantidade: 1,
//   },
// ];
// console.log(lista);

// const itemARemover = prompt("Ítem a remover");

// const newList = lista.filter((item) => item.nome != itemARemover);

// console.log(newList);

// 4. Crie um script onde o usuário passa o nome do produto que deseja procurar e retorne o objeto completo caso o item seja encontrado.

// const lista = [
//   {
//     nome: "Arroz",
//     quantidade: 1,
//   },
//   {
//     nome: "Feijão",
//     quantidade: 1,
//   },
//   {
//     nome: "Açúcar",
//     quantidade: 1,
//   },
//   {
//     nome: "Milho",
//     quantidade: 1,
//   },
//   {
//     nome: "Arroz",
//     quantidade: 1,
//   },
//   {
//     nome: "Milho",
//     quantidade: 1,
//   },
//   {
//     nome: "Feijão",
//     quantidade: 1,
//   },
//   {
//     nome: "Açúcar",
//     quantidade: 1,
//   },
// ];
// console.log(lista);

// const busca = prompt("Ítem a remover");

// const newList = lista.filter((item) => item.nome === busca);

// console.log(newList);

// 5. Desafio: Crie um menu onde o usuário possa escolher através do prompt uma opção das listadas abaixo:

// (a) Adicionar um produto
// (b) Sair

// Se o usuário escolher (a) exiba um prompt pedindo o nome do produto que ele deseja adicionar, e inclua em uma lista. Exiba essa lista atual no console e faça com que o menu sempre apareça enquanto ele não selecionar a opção (b) sair.
// Se o usuário escolher (b) não exiba mais o menu.
// Dica: utilize while para o menu e a função push para adicionar os produtos na lista.

// const lista = [];
// let sair = false;

// while (sair != true) {
//   const menu = prompt(
//     "Selecione a opção desejada: \n(a) Adicionar um produto \n(b) Sair"
//   );

//   switch (menu) {
//     case "a":
//       let novoProduto = prompt("Produto a ser adicionado");
//       lista.push(novoProduto);
//       break;
//     case "b":
//       sair = true;
//       break;
//     default:
//       alert("Valor inválido, tente novamente!");
//       break;
//   }
// }

// console.log(lista);

// 1. Considere o array: [1, 2, 3, 10, 20, 30, 50, 110]. Crie um código onde o usuário passa um número e siga as regras de validação abaixo:

// Se o número passado não estiver no array, apresente a mensagem: 'Esse número não foi encontrado, tente novamente'.
// Se o número estiver no array, apresente a mensagem: 'O número digitado encontra-se no índice: ${indice}'

// const array = [1, 2, 3, 10, 20, 30, 50, 110];

// const busca = parseInt(prompt("Digite o número a buscar"));
// const indiceNumero = array.indexOf(busca);

// if (indiceNumero > 0)
//   alert(`O número digitado encontra-se no índice: ${indiceNumero}`);
// else alert("Valor não encontrado.");

// console.log(array);
// console.log(busca);
// console.log(indiceNumero);

// 2. Crie um código que recebe 5 números e os exiba em ordem crescente/decrescente utilizando a função sort()

// const n1 = parseFloat(prompt("Digite o primeiro número"));
// const n2 = parseFloat(prompt("Digite o segundo número"));
// const n3 = parseFloat(prompt("Digite o terceiro número"));
// const n4 = parseFloat(prompt("Digite o quarto número"));
// const n5 = parseFloat(prompt("Digite o quinto número"));

// const lista = [n1, n2, n3, n4, n5];
// alert(
//   `Crescente: ${lista.sort((a, b) => a - b)}, decrescente: ${lista.sort(
//     (a, b) => b - a
//   )}`
// );

// 3. Considere o array abaixo:

// [
//     {
//       nome: 'Nathan',
//       permissaoAcesso: false,
//       usuario: 'NT1'
//     },
//     {
//       nome: 'Felipe',
//       permissaoAcesso: true,
//       usuario: 'FLP'
//     },
//     {
//       nome: 'Arthur',
//       permissaoAcesso: true,
//       usuario: 'ATR'
//     }
//   ]

// Crie um código que recebe o nome do usuário que está tentando acessar o sitema e atenda as regras de validação abaixo:
// Se o usuário não existir, apresente a mensagem: 'Usuário não existe';
// Se o usuário existir porém não tiver permissão, apresenta a mensagem: 'Você não tem permissão para acessar o sistema';
// Se o usuário tiver permissão apresente a seguinte mensagem: 'Logado com sucesso!'

// const lista = [
//   {
//     nome: "Nathan",
//     permissaoAcesso: false,
//     usuario: "NT1",
//   },
//   {
//     nome: "Felipe",
//     permissaoAcesso: true,
//     usuario: "FLP",
//   },
//   {
//     nome: "Arthur",
//     permissaoAcesso: true,
//     usuario: "ATR",
//   },
// ];

// const user = prompt("Digite o seu usuário");

// const userFound = lista.find((bloco) => bloco.usuario === user);

// if (userFound == undefined) alert("Usuário não existe!");
// else if (userFound.permissaoAcesso) alert("Logado com sucesso!");
// else alert("Você não tem permissão para acessar o sistema.");

/**
 * Exercício 1) Considere o array:
 * [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
 * Crie um script que exiba todos os números ímpar e par que existem no array utilizando for.
 */

// const array = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   6,
//   7,
//   8,
//   9,
//   10,
//   11,
//   12,
//   13,
//   14,
//   15,
//   16,
//   17,
//   18,
//   19,
//   20,
//   21,
//   22,
//   23,
//   24,
//   25,
//   26,
//   27,
//   28,
//   29,
//   30,
//   31,
//   32,
//   33,
//   34,
//   35,
//   36,
//   37,
//   38,
//   39,
//   40,
//   41,
//   42,
//   43,
//   44,
//   45,
//   46,
//   47,
//   48,
//   49,
//   50,
// ];

// const pares = [];
// const impares = [];

// for (let i = 0; i < array.length; i = i + 2) {
//   impares.push(array[i]);
// }
// console.log(impares);
// for (let i = 1; i < array.length; i = i + 2) {
//   pares.push(array[i]);
// }
// console.log(pares);

/**
Exercício 2) Considere o array abaixo:
[
    {
        nome: 'Nathan',
        nota1: 5,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Rodrigo',
        nota1: 7,
        nota2: 9,
        nota3: 8
    },
    {
        nome: 'Jeferson',
        nota1: 6,
        nota2: 7,
        nota3: 9
    },
    {
        nome: 'Alan',
        nota1: 10,
        nota2: 7,
        nota3: 10
    },
    {
        nome: 'Jorge',
        nota1: 3,
        nota2: 10,
        nota3: 10
    },
    {
        nome: 'Otávio',
        nota1: 5,
        nota2: 4,
        nota3: 4
    }
]
 * Crie um script que irá tirar a média da nota1, nota2 e nota3 dos alunos e exiba quais alunos foram aprovados e quais foram reprovados.
 * Considerar que média maior ou igual a 5 o aluno está aprovado e média menor que 5 está reprovado.
 * Dica: Utilize for para percorrer o array e utilize push inserir valores nos novos arrays.
 */

// const alunos = [
//   {
//     nome: "Nathan",
//     nota1: 5,
//     nota2: 7,
//     nota3: 10,
//   },
//   {
//     nome: "Rodrigo",
//     nota1: 7,
//     nota2: 9,
//     nota3: 8,
//   },
//   {
//     nome: "Jeferson",
//     nota1: 6,
//     nota2: 7,
//     nota3: 9,
//   },
//   {
//     nome: "Alan",
//     nota1: 10,
//     nota2: 7,
//     nota3: 10,
//   },
//   {
//     nome: "Jorge",
//     nota1: 3,
//     nota2: 10,
//     nota3: 10,
//   },
//   {
//     nome: "Otávio",
//     nota1: 5,
//     nota2: 4,
//     nota3: 4,
//   },
// ];

// const aprovados = [];
// const reprovados = [];

// for (aluno of alunos) {
//   const media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;
//   if (media >= 5) aprovados.push(aluno);
//   else reprovados.push(aluno);
// }

// console.log("Alunos aprovados:", aprovados);
// console.log("Alunos aprovados:", reprovados);

/**
 * Exercício 3) Considere a matriz abaixo:
 * [[1, 3, 6, 7], [9, 3, 7, 10]]
 *
 * Crie um vetor com os valores da matriz.
 */

// const matriz = [
//   [1, 3, 6, 7],
//   [9, 3, 7, 10],
// ];
// const unificado = [];

// for (i in matriz) {
//   for (n of matriz[i]) {
//     unificado.push(n);
//   }
// }
// console.log(unificado);
