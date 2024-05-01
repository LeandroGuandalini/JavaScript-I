// constante 
// const SALARIO_ATE_20 = 1000
// const SALARIO_ACIMA_20 = 2000

//input
nome = prompt('Qual o seu nome?')
anoNascimento = parseInt(prompt('Que ano você nasceu?'))
salarioBase = parseFloat(prompt('Qual o seu salário base?'))
gratificacao = parseFloat(prompt('Qual sua gratificação?'))
bonus = parseFloat(prompt('Qual seu bônus?'))
desconto = parseFloat(prompt('Quanto tem de desconto?'))

salarioLiquido = 0
// adicional = 0

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
salarioLiquido = salarioBase + gratificacao + bonus - desconto

// if


//output
mensagem = `Eu sou o ${nome}, tenho ${idade} anos e ganho R$${salarioLiquido}`
alert(mensagem)