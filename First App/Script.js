let divHistorico = document.getElementById("div-historico")
divHistorico.style.display = "none";

function calcularIdade(oAnoNascimento){
  const hoje = new Date()
  const anoAtual = hoje.getFullYear()
  return anoAtual - oAnoNascimento
  
}

function calcularValorAdicional(aIdade){
  const SALARIO_ATE_20 = 1000
  const SALARIO_ACIMA_20 = 2000
  const idadeLimite = 20

  return aIdade <= idadeLimite ? SALARIO_ATE_20 : SALARIO_ACIMA_20
}

function calcularSalarioLiquido(aIdade, oSalarioBase, aGratificacao, oBonus, oDesconto, oValorTipo, oValorSenioridade, oSigno, oTimeFutebol){
  let adicional = calcularValorAdicional(aIdade)

  let valorPorSigno = calcularSalarioSigno(oSigno)

  let valorPorFutebol = calcularSalarioFutebol(oTimeFutebol)

  return ((oSalarioBase + aGratificacao + oBonus + adicional + oValorTipo + valorPorSigno + valorPorFutebol) * oValorSenioridade) - oDesconto
}

function obterStatus(oSalarioLiquido, aIdade, oValorSenioridade){
  const MINIMO_SALARIO_APOSENTADORIA = 50000
  const IDADE_MINIMA_APOSENTADORIA = 50
  const SENIORIDADE_MINIMA_APOSENTADORIA = 1.4

  if(oSalarioLiquido > MINIMO_SALARIO_APOSENTADORIA && aIdade > IDADE_MINIMA_APOSENTADORIA && oValorSenioridade == SENIORIDADE_MINIMA_APOSENTADORIA){
    return "posso aposentar"
  }
  return "pobre"
}

function criarItemHistorico(aMensagem) {
  let historico = document.getElementById("ul-historico")
  let listItem = document.createElement("li")
  listItem.textContent = aMensagem
  historico.appendChild(listItem)
}

function calcularSalarioSigno(oSigno){
 return oSigno*2
}

function calcularSalarioFutebol(oTime){
  return oTime*2
}

function imprimir() {
  const nome = document.getElementById("nome").value
  const email = document.getElementById("email").value
  const anoNascimento = Number(document.getElementById("anoNascimento").value)
  const salarioBase = Number(document.getElementById("salarioBase").value)
  const gratificacao = Number(document.getElementById("gratificacao").value)
  const bonus = Number(document.getElementById("bonus").value)
  const desconto = Number(document.getElementById("desconto").value)
  const valorTipo = Number(document.getElementById("tipo").value)
  const valorSenioridade = Number(document.getElementById("senioridade").value)
  const signo = Number(document.getElementById("signo").value)
  const futebol = Number(document.getElementById("futebol").value)

  const idade = calcularIdade(anoNascimento)

  let salarioLiquido = calcularSalarioLiquido(idade, salarioBase, gratificacao, bonus, desconto, valorTipo, valorSenioridade, signo, futebol)

  let status = obterStatus(salarioLiquido, idade, valorSenioridade)

  let mensagem = `Eu sou ${nome} (${email}), tenho ${idade} anos, ganho R$${salarioLiquido} e ${status}`

  criarItemHistorico(mensagem)

  divHistorico.style.display = "block";
}