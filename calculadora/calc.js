const teclaReset = document.getElementById("tecla-reset");
teclaReset.addEventListener("click", clear);

const teclaClear = document.getElementById("tecla-clear");
teclaClear.addEventListener("click", clear);

const teclaSinal = document.getElementById("tecla-sinal");
teclaSinal.addEventListener("click", sinal);

const teclaElevado = document.getElementById("tecla-elevado");
teclaElevado.addEventListener("click", elevado);

const teclaPorcentagem = document.getElementById("tecla-porcentagem");
teclaPorcentagem.addEventListener("click", porcentagem);

const teclaDivide = document.getElementById("tecla-/");
teclaDivide.addEventListener("click", divide);

const tecla7 = document.getElementById("tecla-7");
tecla7.addEventListener("click", sete);

const tecla8 = document.getElementById("tecla-8");
tecla8.addEventListener("click", oito);

const tecla9 = document.getElementById("tecla-9");
tecla9.addEventListener("click", nove);

const teclaMultiplica = document.getElementById("tecla-x");
teclaMultiplica.addEventListener("click", multiplica);

const tecla4 = document.getElementById("tecla-4");
tecla4.addEventListener("click", quatro);

const tecla5 = document.getElementById("tecla-5");
tecla5.addEventListener("click", cinco);

const tecla6 = document.getElementById("tecla-6");
tecla6.addEventListener("click", seis);

const teclaSubtrai = document.getElementById("tecla--");
teclaSubtrai.addEventListener("click", subtrai);

const tecla1 = document.getElementById("tecla-1");
tecla1.addEventListener("click", um);

const tecla2 = document.getElementById("tecla-2");
tecla2.addEventListener("click", dois);

const tecla3 = document.getElementById("tecla-3");
tecla3.addEventListener("click", tres);

const teclaSoma = document.getElementById("tecla-+");
teclaSoma.addEventListener("click", soma);

const tecla0 = document.getElementById("tecla-0");
tecla0.addEventListener("click", zero);

const teclaVirgula = document.getElementById("tecla-virgula");
teclaVirgula.addEventListener("click", virgula);

const teclaResultado = document.getElementById("tecla-resultado");
teclaResultado.addEventListener("click", igual);

const retornoResultadoAtual = document.getElementById("resultado-Atual");
const retornoCalculoAtual = document.getElementById("calculo-Atual");

let calculo = 0;

function retornaResultado(resultado, calculos) {
  if (calculos === undefined) {
    calculos = 0;
  }
  if (calculo % 1 !== 0) {
    retornoResultadoAtual.textContent = parseFloat(resultado).toFixed(2);
  } else {
    retornoResultadoAtual.textContent = parseFloat(resultado);
  }
  retornoCalculoAtual.textContent = calculos;
}

const resultadoPadrao = 0;
let resultadoAtual = resultadoPadrao;
let logEntradas = [];
let numeroApertado = "";
let operadorApertado = "";

function criaCalculo() {
  if (operadorApertado === "+") {
    calculo =
      parseFloat(logEntradas[logEntradas.length - 3]) +
      parseFloat(logEntradas[logEntradas.length - 1]);
    console.log(calculo);
  } else if (operadorApertado === "-") {
    calculo =
      parseFloat(logEntradas[logEntradas.length - 3]) -
      parseFloat(logEntradas[logEntradas.length - 1]);
    console.log(calculo);
  } else if (operadorApertado === "x") {
    calculo =
      parseFloat(logEntradas[logEntradas.length - 3]) *
      parseFloat(logEntradas[logEntradas.length - 1]);
    console.log(calculo);
  } else if (operadorApertado === "/") {
    calculo =
      parseFloat(logEntradas[logEntradas.length - 3]) /
      parseFloat(logEntradas[logEntradas.length - 1]);
    console.log(calculo);
  } else if (operadorApertado === "ˆx") {
    calculo =
      parseFloat(logEntradas[logEntradas.length - 3]) **
      parseFloat(logEntradas[logEntradas.length - 1]);
    console.log(calculo);
  }
}

function igual() {
  logEntradas.push(calculo);
  logEntradas.push(operadorApertado);

  logEntradas.push(numeroApertado);
  criaCalculo();
  retornaResultado(calculo);
  operadorApertado = "=";
  logEntradas.push("=");
  logEntradas.push(calculo);
  // numeroApertado = calculo;
}

function soma() {
  if (logEntradas.length == 0) {
    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    logEntradas.push(numeroApertado);
    operadorApertado = "+";
    logEntradas.push(operadorApertado);
  } else if (operadorApertado === "=") {
    logEntradas.push(calculo);
    operadorApertado = "+";
    logEntradas.push(operadorApertado);
  } else {
    logEntradas.push(calculo);

    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    operadorApertado = "+";
    logEntradas.push(operadorApertado);
    logEntradas.push(numeroApertado);
  }

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function subtrai() {
  if (logEntradas.length == 0) {
    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    logEntradas.push(numeroApertado);
    operadorApertado = "-";
    logEntradas.push(operadorApertado);
  } else if (operadorApertado === "=") {
    logEntradas.push(calculo);
    operadorApertado = "-";
    logEntradas.push(operadorApertado);
  } else {
    logEntradas.push(calculo);

    calculo -= parseFloat(numeroApertado);
    retornaResultado(calculo);

    operadorApertado = "-";
    logEntradas.push(operadorApertado);
    logEntradas.push(numeroApertado);
  }

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function multiplica() {
  if (logEntradas.length == 0) {
    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    logEntradas.push(numeroApertado);
    operadorApertado = "x";
    logEntradas.push(operadorApertado);
  } else if (operadorApertado === "=") {
    logEntradas.push(calculo);
    operadorApertado = "x";
    logEntradas.push(operadorApertado);
  } else {
    logEntradas.push(calculo);

    calculo *= parseFloat(numeroApertado);
    retornaResultado(calculo);

    operadorApertado = "x";
    logEntradas.push(operadorApertado);
    logEntradas.push(numeroApertado);
  }

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function divide() {
  logEntradas.push(numeroApertado);
  operadorApertado = "/";
  logEntradas.push(operadorApertado);
  console.log(numeroApertado);
  limpar();

  console.log(operadorApertado);
  console.log(logEntradas);
}

function divide() {
  if (logEntradas.length == 0) {
    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    logEntradas.push(numeroApertado);
    operadorApertado = "/";
    logEntradas.push(operadorApertado);
  } else if (operadorApertado === "=") {
    logEntradas.push(calculo);
    operadorApertado = "/";
    logEntradas.push(operadorApertado);
  } else {
    logEntradas.push(calculo);

    calculo /= parseFloat(numeroApertado);
    retornaResultado(calculo);

    operadorApertado = "/";
    logEntradas.push(operadorApertado);
    logEntradas.push(numeroApertado);
  }

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function elevado() {
  if (logEntradas.length == 0) {
    calculo += parseFloat(numeroApertado);
    retornaResultado(calculo);

    logEntradas.push(numeroApertado);
    operadorApertado = "ˆx";
    logEntradas.push(operadorApertado);
  } else {
    logEntradas.push(calculo);

    calculo = calculo ** parseFloat(numeroApertado);
    retornaResultado(calculo);

    operadorApertado = "ˆx";
    logEntradas.push(operadorApertado);
    logEntradas.push(numeroApertado);
  }

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function porcentagem() {
  logEntradas.push(calculo);
  logEntradas.push(operadorApertado);

  logEntradas.push(numeroApertado);
  calculo =
    (parseFloat(logEntradas[logEntradas.length - 1]) / 100) *
    parseFloat(logEntradas[logEntradas.length - 3]);
  retornaResultado(calculo);

  operadorApertado = "%";
  logEntradas.push("=");
  logEntradas.push(calculo);

  limpar();
  console.log(operadorApertado);
  console.log(logEntradas);
  console.log(calculo);
}

function sinal() {
  numeroApertado *= -1;
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function virgula() {
  numeroApertado += ".";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function zero() {
  numeroApertado += "0";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function um() {
  numeroApertado += "1";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function dois() {
  numeroApertado += "2";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function tres() {
  numeroApertado += "3";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function quatro() {
  numeroApertado += "4";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function cinco() {
  numeroApertado += "5";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function seis() {
  numeroApertado += "6";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function sete() {
  numeroApertado += "7";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function oito() {
  numeroApertado += "8";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function nove() {
  numeroApertado += "9";
  console.log(numeroApertado);
  retornaResultado(numeroApertado);
}

function limpar() {
  numeroApertado = "";
  retornaResultado(0, calculo);
  console.log(numeroApertado);
}

function clear() {
  numeroApertado = "";
  logEntradas = [];
  calculo = 0;
  retornaResultado(0, 0);
  console.log(numeroApertado);
}

// TESTE KEYBOARD

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "Enter":
        igual();
        document
          .getElementById("tecla-resultado")
          .classList.toggle("button-active");
        break;
      case "+":
        soma();
        document.getElementById("tecla-+").classList.toggle("button-active");
        break;
      case "-":
        subtrai();
        document.getElementById("tecla--").classList.toggle("button-active");
        break;
      case "*":
        multiplica();
        document.getElementById("tecla-x").classList.toggle("button-active");
        break;
      case "/":
        divide();
        document.getElementById("tecla-/").classList.toggle("button-active");
        break;
      case ".":
        virgula();
        document
          .getElementById("tecla-virgula")
          .classList.toggle("number-active");
        break;
      case "%":
        porcentagem();
        document
          .getElementById("tecla-porcentagem")
          .classList.toggle("button-active");
        break;
      case "Backspace":
        limpar();
        document
          .getElementById("tecla-clear")
          .classList.toggle("button-active");
        break;
      case "Escape":
        clear();
        document
          .getElementById("tecla-reset")
          .classList.toggle("button-active");
        break;
      case "e":
        elevado();
        document
          .getElementById("tecla-elevado")
          .classList.toggle("button-active");
        break;
      case "s":
        sinal();
        document
          .getElementById("tecla-sinal")
          .classList.toggle("button-active");
        break;
      case "0":
        zero();
        document.getElementById("tecla-0").classList.toggle("number-active");
        break;
      case "1":
        um();
        document.getElementById("tecla-1").classList.toggle("number-active");
        break;
      case "2":
        dois();
        document.getElementById("tecla-2").classList.toggle("number-active");
        break;
      case "3":
        tres();
        document.getElementById("tecla-3").classList.toggle("number-active");
        break;
      case "4":
        quatro();
        document.getElementById("tecla-4").classList.toggle("number-active");
        break;
      case "5":
        cinco();
        document.getElementById("tecla-5").classList.toggle("number-active");
        break;
      case "6":
        seis();
        document.getElementById("tecla-6").classList.toggle("number-active");
        break;
      case "7":
        sete();
        document.getElementById("tecla-7").classList.toggle("number-active");
        break;
      case "8":
        oito();
        document.getElementById("tecla-8").classList.toggle("number-active");
        break;
      case "9":
        nove();
        document.getElementById("tecla-9").classList.toggle("number-active");
        break;
      default:
        return;
    }
    event.preventDefault();
  },
  true
);

window.addEventListener(
  "keyup",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }

    switch (event.key) {
      case "Enter":
        document
          .getElementById("tecla-resultado")
          .classList.toggle("button-active");
        break;
      case "+":
        document.getElementById("tecla-+").classList.toggle("button-active");
        break;
      case "-":
        document.getElementById("tecla--").classList.toggle("button-active");
        break;
      case "*":
        document.getElementById("tecla-x").classList.toggle("button-active");
        break;
      case "/":
        document.getElementById("tecla-/").classList.toggle("button-active");
        break;
      case ".":
        document
          .getElementById("tecla-virgula")
          .classList.toggle("number-active");
        break;
      case "%":
        document
          .getElementById("tecla-porcentagem")
          .classList.toggle("button-active");
        break;
      case "Backspace":
        document
          .getElementById("tecla-clear")
          .classList.toggle("button-active");
        break;
      case "Escape":
        document
          .getElementById("tecla-reset")
          .classList.toggle("button-active");
        break;
      case "e":
        document
          .getElementById("tecla-elevado")
          .classList.toggle("button-active");
        break;
      case "s":
        document
          .getElementById("tecla-sinal")
          .classList.toggle("button-active");
        break;
      case "0":
        document.getElementById("tecla-0").classList.toggle("number-active");
        break;
      case "1":
        document.getElementById("tecla-1").classList.toggle("number-active");
        break;
      case "2":
        document.getElementById("tecla-2").classList.toggle("number-active");
        break;
      case "3":
        document.getElementById("tecla-3").classList.toggle("number-active");
        break;
      case "4":
        document.getElementById("tecla-4").classList.toggle("number-active");
        break;
      case "5":
        document.getElementById("tecla-5").classList.toggle("number-active");
        break;
      case "6":
        document.getElementById("tecla-6").classList.toggle("number-active");
        break;
      case "7":
        document.getElementById("tecla-7").classList.toggle("number-active");
        break;
      case "8":
        document.getElementById("tecla-8").classList.toggle("number-active");
        break;
      case "9":
        document.getElementById("tecla-9").classList.toggle("number-active");
        break;
      default:
        return;
    }
    event.preventDefault();
  },
  true
);
