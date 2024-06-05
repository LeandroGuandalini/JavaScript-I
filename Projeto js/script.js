function registrarHistorico(mensagem, sucesso){
  const historicoAlteracao = document.getElementById("historicoAlteracao");
  const divAlertContainer = document.getElementById("alertContainer");
  // divAlertContainer.style.display = "none";
  if (sucesso) {
  const li = document.createElement("li");
  li.textContent = mensagem;
  historicoAlteracao.appendChild(li);
  } else {
  // divAlertContainer.style.display = "block";
  divAlertContainer.className = "alert alert-info"
  divAlertContainer.innerHTML = `<strong>Atenção!</strong> ${mensagem}.`
  }
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
  
function registrarVenda(produto, quantidade, precoUnitario){
  let dataTransacao = registrarDataTransacao();
  let numeroTransacao = gerarNumeroTransacao ();

  let validaCamposObrigatorios = validarCamposObrigatorios(produto, quantidade, precoUnitario, dataTransacao);
  let validaQuantidadeProdutos = validarQuantidadeProdutos(quantidade);
  let validaPrecoUnitario = validarPrecoUnitario(precoUnitario);
  
  if(validaCamposObrigatorios){
    if(validaQuantidadeProdutos){
      if(validaPrecoUnitario){
        return {
          mensagem: `[${numeroTransacao}] Transação registrada! ${produto}, Qtde: ${quantidade}, Preço: R$${precoUnitario}, Data: ${dataTransacao}`,
          sucesso: true
        };
      } else {
        return {
          mensagem: "Problemas na Validação de Preço Unitário!",
          sucesso: false
        };
      }
    } else {
      return {
        mensagem: "Problemas na Validação de Quantidade de Produtos!",
        sucesso: false
      };
    }
  } else {
      return {
        mensagem: "Problemas na validação de campos obrigatórios!",
        sucesso: false
      };
  }
}

function vender (){
  let produto = document.getElementById("produto").value;
  let quantidade = Number(document.getElementById("quantidade").value);
  let preco = Number(document.getElementById("preco").value);

  let objeto = registrarVenda(produto, quantidade, preco)

  registrarHistorico(objeto.mensagem, objeto.sucesso);
}