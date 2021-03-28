let firstNumber;
let secondNumber;
let resultAdd;
let resultSubtract;
let resultMultiply;
let resultDivide;

firstNumber = parseFloat(prompt("Digite o primeiro número"));
secondNumber = parseFloat(prompt("Digite o segundo número"));

resultAdd = firstNumber + secondNumber;
resultSubtract = firstNumber - secondNumber;
resultMultiply = firstNumber * secondNumber;
resultDivide = firstNumber / secondNumber;

console.log(
  "O resultado da soma é: ",
  resultAdd,
  "; O resultado da subtração é: ",
  resultSubtract,
  "; O resultado da multiplicação é: ",
  resultMultiply,
  "; O resultado da divisão é: ",
  resultDivide
);

//

let n1, n2, resultado;
const fatorBase = 2;

n1 = parseFloat(prompt("Digite o primeiro número"));
n2 = parseFloat(prompt("Digite o segundo número"));

resultado = (n1 + n2) / fatorBase;

document.write(`<h1>A média entre os dois números é: ${resultado}</h1>`);
