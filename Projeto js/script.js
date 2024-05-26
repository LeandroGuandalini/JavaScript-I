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
  
function registrarVenda(){
  let produto = "Arroz";
  let quantidade = 5;
  let precoUnitario = 10.5;
  
  let dataTransacao = registrarDataTransacao();

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade);
  let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);
  
  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      if(validaPrecoUnitario){
        alert("Transação registrada! " + produto + ", Qtde: " + quantidade + ", Preço: R$" + precoUnitario + ", Data: " + dataTransacao);
      } else {
        alert("Problemas na Validação de Preço Unitário!");
      }
    } else {
      alert("Problemas na Validação de Quantidade de Produtos!");
    }
  } else {
      alert("Problemas na validação de campos obrigatórios!");
  }
}

registrarVenda();