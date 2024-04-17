//input
anoNascimento = 2000
nome = "Leandro"

//processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = "Eu sou o " + nome + " e tenho " + idade + " anos"

//output
alert(mensagem)