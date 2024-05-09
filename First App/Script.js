let divHistorico = document.getElementById("div-historico")
divHistorico.style.display = "none";

function calcularIdade(oAnoNascimento){
  const hoje = new Date()
  const anoAtual = hoje.getFullYear()
  const idade = anoAtual - oAnoNascimento
  return idade
}

function calcularValorAdicional(aIdade){
  const SALARIO_ATE_20 = 1000
  const SALARIO_ACIMA_20 = 2000
  const idadeLimite = 20
  let adicional = aIdade <= idadeLimite ? SALARIO_ATE_20 : SALARIO_ACIMA_20
  return adicional 
}

function calcularSalarioLiquido(aIdade, oSalarioBase, aGratificacao, oBonus, oDesconto, oValorTipo, oValorSenioridade){
  let adicional = calcularValorAdicional(aIdade)

  let salarioLiquido = (oSalarioBase + aGratificacao + oBonus + adicional + oValorTipo) * oValorSenioridade - oDesconto

  return salarioLiquido;
}

function imprimir() {
  const nome = document.getElementById("nome").value
  const anoNascimento = Number(document.getElementById("anoNascimento").value)
  const salarioBase = Number(document.getElementById("salarioBase").value)
  const gratificacao = Number(document.getElementById("gratificacao").value)
  const bonus = Number(document.getElementById("bonus").value)
  const desconto = Number(document.getElementById("desconto").value)
  const valorTipo = Number(document.getElementById("tipo").value)
  const valorSenioridade = Number(document.getElementById("senioridade").value)

  const idade = calcularIdade(anoNascimento)

  let salarioLiquido = calcularSalarioLiquido(idade, salarioBase, gratificacao, bonus, desconto, valorTipo, valorSenioridade)

  let mensagem = `Eu sou o ${nome}, tenho ${idade} anos e ganho R$${salarioLiquido}`

  criarItemHistorico(mensagem)

  divHistorico.style.display = "block";
}

function criarItemHistorico(aMensagem) {
  let historico = document.getElementById("ul-historico")
  let listItem = document.createElement("li")
  listItem.textContent = aMensagem
  historico.appendChild(listItem)
}