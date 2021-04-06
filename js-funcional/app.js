// Funções Puras : Não dependem de nenhuma outra função do código
const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;

// Funções da Alta Ordem : Quando uma função recebe/retorna outra função
const calcular = (operacao, n1, n2) => operacao(n1, n2);
const media = (a, b) => calcular(dividir, calcular(somar, a, b), 2);

const n1 = parseFloat(prompt("Digite o primeiro numero"));
const n2 = parseFloat(prompt("Digite o segundo numero"));

console.log(calcular(somar, n1, n2));
console.log(calcular(subtrair, n1, n2));
console.log(calcular(multiplicar, n1, n2));
console.log(calcular(dividir, n1, n2));
console.log(media(n1, n2));
