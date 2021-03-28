// EX 1

const pessoas = [];
const siglaMasculino = "M";
const siglaFeminino = "F";

const adicionaPessoas = (idade, peso, sexo) => {
  const pessoa = {
    idade: parseInt(idade),
    peso: parseFloat(peso),
    sexo, //mesmo que (sexo: sexo)
  };
  pessoas.push(pessoa);
  atualizaLista();
};

const atualizaTotal = () => {
  const totalHomens = document.getElementById("totalHomens");
  const totalMulheres = document.getElementById("totalMulheres");
  const mediaIdadeHomens = document.getElementById("mediaIdadeHomens");
  const mediaIdadeMulheres = document.getElementById("mediaIdadeMulheres");
  const mediaPesoHomens = document.getElementById("mediaPesoHomens");
  const mediaPesoMulheres = document.getElementById("mediaPesoMulheres");

  totalHomens.innerText = `Total de Homens: ${totalPessoasSexo(
    siglaMasculino
  )}`;
  totalMulheres.innerText = `Total de Mulheres: ${totalPessoasSexo(
    siglaFeminino
  )}`;
  mediaIdadeHomens.innerText = `Média da idade dos homens: ${mediaIdadePorSexo(
    siglaMasculino
  )}`;
  mediaIdadeMulheres.innerText = `Média da idade das mulheres: ${mediaIdadePorSexo(
    siglaFeminino
  )}`;
  mediaPesoHomens.innerText = `Média de peso dos homens: ${mediaPesoPorSexo(
    siglaMasculino
  )}`;
  mediaPesoMulheres.innerText = `Média de peso das mulheres: ${mediaPesoPorSexo(
    siglaFeminino
  )}`;
};

const totalPessoasSexo = (sexo) => {
  const pessoasSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
  return pessoasSexo.length;
};

const mediaIdadePorSexo = (sexo) => {
  let somaIdades = 0;
  const pessoasPorSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
  for (pessoa of pessoasPorSexo) {
    somaIdades += pessoa.idade;
  }
  if (pessoasPorSexo.length > 0) {
    return somaIdades / pessoasPorSexo.length;
  }
  return 0;
};

const mediaPesoPorSexo = (sexo) => {
  let somaPesos = 0;
  const pessoasPorSexo = pessoas.filter((pessoa) => pessoa.sexo === sexo);
  for (pessoa of pessoasPorSexo) {
    somaPesos += pessoa.peso;
  }
  if (pessoasPorSexo.length > 0) {
    return somaPesos / pessoasPorSexo.length;
  }
  return 0;
};

const atualizaLista = () => {
  const listaUl = document.getElementById("listaPessoas");
  let pessoasLi = "";

  for (pessoa of pessoas) {
    pessoasLi += `<li>Idade: ${pessoa.idade}, Peso: ${pessoa.peso}, Sexo: ${
      pessoa.sexo === "M" ? "Masculino" : "Feminino"
    }</li>`;
  }

  listaUl.innerHTML = pessoasLi;
  atualizaTotal();
};
