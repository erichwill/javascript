const inputFormBusca = document.getElementById("inputBusca");
const inputNomeAluno = document.getElementById("nomeAluno");
const inputIdade = document.getElementById("idade");
const inputValorMensalidade = document.getElementById("valorMensalidade");
const selectProfessorResponsavel = document.getElementById(
  "professorResponsavel"
);
const selectTemAcesso = document.getElementById("temAcesso");
const divVisualizacao = document.getElementById("visualizacao");
const divIndicadores = document.getElementById("indicadores");
const exibeMensagemSucesso = criarExibirMensagem(alert);
const exibeMensagemErro = criarExibirMensagem(alert);
const selectTipoBusca = document.getElementById("tipoBusca");
const inputBusca = document.getElementById("inputBusca");
const alunos = [];
const idadeSenior = 60;
let proximoId = 1;

inputBusca.addEventListener("keyup", (event) => {
  const valor = event.target.value;
  const listaAlunosFiltrada = alunos.filter(
    selectTipoBusca.value === "id"
      ? buscaPorId(parseInt(valor))
      : selectTipoBusca.value === "nome"
      ? buscaPorNome(valor)
      : selectTipoBusca.value === "idade"
      ? buscaPorIdade(parseInt(valor))
      : selectTipoBusca.value === "professor"
      ? buscaPorProfessor(valor)
      : true
  );
  if (valor && listaAlunosFiltrada.length == 0) {
    divVisualizacao.innerHTML = "<br><h4>Ítem não encontrado!</h4>";
  } else {
    atualizaListaAlunos(listaAlunosFiltrada);
  }
});

const adicionaAluno = (
  nomeAluno,
  idade,
  valorMensalidade,
  professorResponsavel,
  temAcesso
) => {
  if (!nomeAluno || !idade || !valorMensalidade || !professorResponsavel)
    return exibeMensagemErro("Todos os campos são obrigatórios!");

  const aluno = {
    id: proximoId,
    nomeAluno,
    idade,
    valorMensalidade,
    professorResponsavel,
    temAcesso,
    adaptado: idade >= idadeSenior ? true : false,
  };
  alunos.push(aluno);
  proximoId++;
  atualizaListaAlunos();
};

const atualizaListaAlunos = (listaAlunosFiltrada) => {
  let cards = "";
  const listaAlunos =
    listaAlunosFiltrada && listaAlunosFiltrada.length > 0
      ? listaAlunosFiltrada
      : alunos;
  for (aluno of listaAlunos) {
    cards += `
      <div class="card">
            <div class="descricao-card">
                <p>Nome: <b>${aluno.nomeAluno}</b></p>
                <p>Idade: <b>${aluno.idade}</b></p>
                <p>Exercícios Adaptados: <b>${
                  aluno.adaptado ? "Sim" : "Não"
                }</b></p>
                <p>Professor Responsável: <b>${
                  aluno.professorResponsavel
                }</b></p>
                <p>Tem acesso: <b  style="cursor: pointer" onclick="atualizaStatusAcesso(${
                  aluno.id
                })" class="${aluno.temAcesso ? "sim" : "nao"}">
                ${aluno.temAcesso ? "Sim" : "Não"}</b></p>                
                <p>Valor mensalidade: <b>${aluno.valorMensalidade}</b></p>
            </div>
            <div class="acoes">
                <span class="material-icons acao"  onclick="removeAluno(${
                  aluno.id
                })">
                    delete
                </span>
            </div>
        </div>
      </div>`;
  }

  divVisualizacao.innerHTML = cards;
  atualizaIndicadores();
};

const atualizaIndicadores = () => {
  let h3Indicadores = "";
  let somaIdades = 0;
  let somaMensalidades = 0;
  const retornaH3Formatado = (titulo, valor) => {
    return `<h3>${titulo}: ${valor}</h3>`;
  };

  for (aluno of alunos) {
    somaIdades += aluno.idade;
    somaMensalidades += aluno.valorMensalidade;
  }

  h3Indicadores += retornaH3Formatado("Total de Alunos", alunos.length);
  h3Indicadores += retornaH3Formatado(
    "Média idades",
    calcular(dividir, somaIdades, alunos.length)
  );
  h3Indicadores += retornaH3Formatado(
    "Total das mensalidades",
    somaMensalidades
  );
  h3Indicadores += retornaH3Formatado(
    "Média mensalidades",
    calcular(dividir, somaMensalidades, alunos.length)
  );
  divIndicadores.innerHTML = h3Indicadores;
};

const buscaPorId = (id) => (aluno) => aluno.id === id;

const buscaPorIdade = (idade) => (aluno) => aluno.idade === idade;

const buscaPorNome = (nome) => (aluno) => {
  return aluno.nomeAluno.toUpperCase().search(nome.toUpperCase()) > -1;
};

const buscaPorProfessor = (professorResponsavel) => (aluno) => {
  return (
    aluno.professorResponsavel
      .toUpperCase()
      .search(professorResponsavel.toUpperCase()) > -1
  );
};

const removeAluno = (id) => {
  const alunoIndex = alunos.findIndex(buscaPorId(id));
  alunos.splice(alunoIndex, 1);
  atualizaListaAlunos();
};

const atualizaStatusAcesso = (id, statusAtual) => {
  const alunoIndex = alunos.findIndex(buscaPorId(id));

  if (alunoIndex > -1) {
    alunos[alunoIndex].temAcesso = !statusAtual;
  }
  atualizaListaAlunos();
};

const limpaCampos = (
  nomeAluno,
  idade,
  valorMensalidade,
  professorResponsavel,
  temAcesso
) => {
  nomeAluno.value = "";
  idade.value = "";
  valorMensalidade.value = "";
  professorResponsavel.value = "";
  temAcesso.value = "";
};
