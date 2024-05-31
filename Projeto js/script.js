function registrarHistorico(mensagem){
  const historicoAlteracao = document.getElementById("historicoAlteracao");
  const li = document.createElement("li");
  li.textContent = mensagem;
  historicoAlteracao.appendChild(li);
}

function validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao){
  return produto && quantidade != null && precoUnitario != null && dataTransacao;
}

function validarQuantidadeProdutos(quantidade){
  return quantidade > 0;
}

function validarPrecoUnitario(precoUnitario){
  return precoUnitario > 0;
}

function registrarDataTransacao(){
  return new Date().toLocaleString();
} 

function gerarNumeroTransacao () {
  return Math.floor(Math.random() * 10000000);
}
  
function registrarVenda(){
  let produto = "Arroz";
  let quantidade = 5;
  let precoUnitario = 10.5;
  
  let dataTransacao = registrarDataTransacao();
  let numeroTransacao = gerarNumeroTransacao ();

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade);
  let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);
  
  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      if(validaPrecoUnitario){
        return `[${numeroTransacao}] Transação registrada! ${produto}, Qtde: ${quantidade}, Preço: R$${precoUnitario}, Data: ${dataTransacao}`;
      } else {
        return "Problemas na Validação de Preço Unitário!";
      }
    } else {
      return "Problemas na Validação de Quantidade de Produtos!";
    }
  } else {
      return "Problemas na validação de campos obrigatórios!";
  }
}

function vender (){
  let produto = document.getElementById("produto").value;
  let quantidade = document.getElementById("quantidade").value;
  let preco = document.getElementById("preco").value;

  let mensagem = registrarVenda(produto, quantidade, preco)

  registrarHistorico(mensagem);
}