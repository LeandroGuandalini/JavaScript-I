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

function impressao(){
  const nome = document.getElementById("nome").value
  const anoNascimento = parseInt(document.getElementById("anoNascimento").value)
  const salarioBase = parseFloat(document.getElementById("salarioBase").value)
  const gratificacao = parseFloat(document.getElementById("gratificacao").value)
  const bonus = parseFloat(document.getElementById("bonus").value)
  const desconto = parseFloat(document.getElementById("desconto").value)

  const idade = calcularIdade(anoNascimento)
  let adicional = calcularValorAdicional(idade)
  let salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional

  let mensagem = `Eu sou o ${nome}, tenho ${idade} anos e ganho R$${salarioLiquido}`
  alert(mensagem)
}