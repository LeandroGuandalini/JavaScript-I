function calcularNota(aPrimeiraNota, aSegundaNota, aTerceiraNota, aQuartaNota, oPesoNotaUm, oPesoNotaDois, oPesoNotaTres, oPesoNotaQuatro){
  let calculoMedia = (aPrimeiraNota*oPesoNotaUm + aSegundaNota*oPesoNotaDois + aTerceiraNota*oPesoNotaTres + aQuartaNota*oPesoNotaQuatro)/(oPesoNotaUm + oPesoNotaDois + oPesoNotaTres + oPesoNotaQuatro)
  return calculoMedia
}

function imprimir(){
const nome = document.getElementById("nome").value
const primeiraNota = parseFloat(document.getElementById("primeiraNota").value)
const segundaNota = parseFloat(document.getElementById("segundaNota").value)
const terceiraNota = parseFloat(document.getElementById("terceiraNota").value)
const quartaNota = parseFloat(document.getElementById("quartaNota").value)
const pesoNotaUm = parseInt(document.getElementById("pesoNotaUm").value)
const pesoNotaDois = parseInt(document.getElementById("pesoNotaDois").value)
const pesoNotaTres = parseInt(document.getElementById("pesoNotaTres").value)
const pesoNotaQuatro = parseInt(document.getElementById("pesoNotaQuatro").value)

let media = calcularNota(primeiraNota, segundaNota, terceiraNota, quartaNota, pesoNotaUm, pesoNotaDois, pesoNotaTres, pesoNotaQuatro)

let mensagem = `O(a) aluno(a) ${nome} teve um média final de ${media}`
alert(mensagem)
}