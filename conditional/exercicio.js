// EX 1 Crie um código que recebe 3 valores, e exiba o maior e o menor valor entre eles.

// let n1, n2, n3;

// n1 = prompt("Primeiro número");
// n2 = prompt("Segundo número");
// n3 = prompt("Terceiro número");

// alert(
//   `O maior número é: ${Math.max(n1, n2, n3)} e o menor é: ${Math.min(
//     n1,
//     n2,
//     n3
//   )}`
// );

// EX 2 Crie um código que recebe n1, n2 e n3 e exiba se a soma de n1 com n2 é maior/menor que n3.

// let n1, n2, n3, soma;

// n1 = parseFloat(prompt("Primeiro número"));
// n2 = parseFloat(prompt("Segundo número"));
// n3 = parseFloat(prompt("Terceiro número"));
// soma = n1 + n2;

// if (soma > n3) {
//   alert("A soma dos dois primeiros números é MAIOR que o terceiro.");
// } else {
//   alert("A soma dos dois primeiros números é MENOR que o terceiro.");
// }

// EX 3 Crie um código que recebe um número e exiba se ele é ímpar ou par(considere que qualquer número par dividido por 2 não tem resto).

// let number;

// number = parseFloat(prompt("Digite um número"));

// if (number % 2 === 0) {
//   alert("O número é PAR");
// } else {
//   alert("O número é IMPAR");
// }

// EX 4 Crie um código que recebe 3 números e os exiba em ordem decrescente

// let n1, n2, n3;

// n1 = parseFloat(prompt("Primeiro número"));
// n2 = parseFloat(prompt("Segundo número"));
// n3 = parseFloat(prompt("Terceiro número"));

// if (n1 > n2 && n1 > n3 && n2 > n3) {
//   alert(`${n1} ${n2} ${n3}`);
// } else if (n1 > n2 && n1 > n3 && n3 > n2) {
//   alert(`${n1} ${n3} ${n2}`);
// } else if (n2 > n1 && n2 > n3 && n1 > n3) {
//   alert(`${n2} ${n1} ${n3}`);
// } else if (n2 > n1 && n2 > n3 && n3 > n1) {
//   alert(`${n2} ${n3} ${n1}`);
// } else if (n3 > n1 && n3 > n2 && n1 > n2) {
//   alert(`${n3} ${n1} ${n2}`);
// } else {
//   alert(`${n3} ${n2} ${n1}`);
// }

// falsy (falsos por padrão em condições logicas): undefined, 0, "", NaN, null.

// SWITCH

// const senhaDigitada = prompt("Digite a senha");
// const senhaValida1 = "ABCD";
// const senhaValida2 = "1234";

// switch (senhaDigitada) {
//   case senhaValida1:
//     alert("Senha correta!");
//     break;
//   case senhaValida2:
//     alert("Senha correta!");
//     break;
//   default:
//     alert("Senha incorreta!");
//     break;
// }

// EX 1 Escreva um código que imprima um mês de acordo com o número digitado pelo usuário.

// let numero;

// numero = parseInt(prompt("Digite um número para saber o mês correspondente"));

// if (numero === 1) {
//   alert("Mês correspondete: Janeiro");
// } else if (numero === 2) {
//   alert("Mês correspondete: Fevereiro");
// } else if (numero === 3) {
//   alert("Mês correspondete: Março");
// } else if (numero === 4) {
//   alert("Mês correspondete: Abril");
// } else if (numero === 5) {
//   alert("Mês correspondete: Maio");
// } else if (numero === 6) {
//   alert("Mês correspondete: Junho");
// } else if (numero === 7) {
//   alert("Mês correspondete: Julho");
// } else if (numero === 8) {
//   alert("Mês correspondete: Agosto");
// } else if (numero === 9) {
//   alert("Mês correspondete: Setembro");
// } else if (numero === 10) {
//   alert("Mês correspondete: Outubro");
// } else if (numero === 11) {
//   alert("Mês correspondete: Novembro");
// } else if (numero === 12) {
//   alert("Mês correspondete: Dezembro");
// } else {
//   alert("Invalido. Digite um valor entre 1 e 12");
// }

// EX 2 Escreva um código que simule uma calculadora básica, provendo a leitura de um valor, seguido da operação(+, -, * e /) e do segundo valor.

// let n1, operador, n2, resultado;

// n1 = parseFloat(prompt("Digite o primeiro numero"));
// operador = prompt("Digite o operador +, -, * ou /");
// n2 = parseFloat(prompt("Digite o segundo numero"));

// if (operador === "+") {
//   resultado = n1 + n2;
// } else if (operador === "-") {
//   resultado = n1 - n2;
// } else if (operador === "*") {
//   resultado = n1 * n2;
// } else if (operador === "/") {
//   resultado = n1 / n2;
// } else {
//   alert("Insita um operador válido");
//   window.location.reload();
// }

// alert(resultado);

// EX 3 Crie um código que recebe 3 notas de um aluno entre 0 e 10 e calcule a média.

// Se a média for menor que 5 exiba na tela que esse aluno está reprovado, caso a nota seja maior ou igual a 5 exiba que ele foi aprovado.
// Coloque validação se o usuário preencheu todas as notas e se elas estão entre 0-10, se uma dessas regras de validação não for cumprida, peça para ele começar novamente

let nota1, nota2, nota3, media;

nota1 = parseFloat(prompt("Digite a primeira nota"));
nota2 = parseFloat(prompt("Digite a segunda nota"));
nota3 = parseFloat(prompt("Digite a terceira nota"));

media = (nota1 + nota2 + nota3) / 3;
media = media.toFixed(1);

if (
  nota1 > 10 ||
  nota2 > 10 ||
  nota3 > 10 ||
  nota1 < 0 ||
  nota2 < 0 ||
  nota3 < 0
) {
  alert("O valor deve estar entre 0 e 10.");
  window.location.reload();
} else if (media >= 5) {
  alert(`A média é ${media} e você esta APROVADO!.`);
} else {
  alert(`A média é ${media} e você esta REPROVADO!.`);
}
