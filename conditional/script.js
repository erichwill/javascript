const idade = parseInt(prompt("Digite a sua idade"));
const podeVacinar = "Para essa idade, você já pode se vacinar";
const naoPodeVacinar = "Para essa idade, você não pode se vacinar";

// Operadores lógicos: ==, ===, !=, !==, >, >=, <, <=
// == igual (valida apenas o valor.)
// === igual (valida o valor E o tipo.)
// != diferente (valida apenas o valor.)
// !== diferente (valida o valor E o tipo.)
// && "e" (ambos true)
// || "ou" (um ou outro true)

if (idade > 90 && idade <= 105) {
  document.write(podeVacinar);
} else if (idade >= 85) {
  document.write(podeVacinar);
} else {
  document.write(naoPodeVacinar);
}

const idadeMaiorQue90 =
  idade > 90 ? "Idade maior que 90" : "Idade menor que 90";
console.log(idadeMaiorQue90);

// Operador lógico dentro do if

const senha = "102030";
const senhaDigitada = prompt("Digite a senha");

if (senhaDigitada === senha) {
  alert("Acesso autorizado!");
} else {
  alert("Acesso negado!");
}
