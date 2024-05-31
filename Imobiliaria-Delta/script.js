function registrarHistorico(mensagem){
  const historicoAlteracao = document.getElementById("historicoAlteracao");
  const li = document.createElement("li");
  li.textContent = mensagem;
  historicoAlteracao.appendChild(li);
}

function validarCamposObrigatorios(logradouro, endereco, cidade, localidade, bairro){
  return logradouro && endereco && cidade && localidade && bairro;
}

function validarAluguel (aluguel){
  return aluguel > 0;
}

function validarNumero (numero) {
  return numero >= 0;
}

function validarMetragem (metragem) {
  return metragem > 0;
}

function validarQuartos (quartos) {
  return quartos >= 0;
}

function validarBanheiros (banheiros) {
  return banheiros >= 0;
}

function validarComodos (comodos) {
  return comodos > 0;
}

function validarCep (cep) {
  return cep > 0;
}

function registrarDataTransacao(){
  return new Date().toLocaleString();
} 

function gerarIdentificador (){
  return Math.floor(Math.random() * 1000000);
}

function registrarCasa () {
  let logradouro = document.getElementById("logradouro").value;
  let endereco = document.getElementById("endereco").value;
  let numero = Number(document.getElementById("numero").value);
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let metragem = Number(document.getElementById("metragem").value);
  let quartos = Number(document.getElementById("quartos").value);
  let banheiros = Number(document.getElementById("banheiros").value);
  let comodos = Number(document.getElementById("comodos").value);
  let localidade = document.getElementById("localidade").value;
  let aluguel = Number(document.getElementById("aluguel").value);
  let cep = Number(document.getElementById("cep").value);
  let data = registrarDataTransacao();
  let identificador = gerarIdentificador();

  if (validarCamposObrigatorios(logradouro, endereco, cidade, localidade, bairro)) {
    if (validarAluguel(aluguel)) {
      if (validarNumero(numero)) {
        if (validarMetragem(metragem)){
          if (validarQuartos(quartos)){
            if (validarBanheiros(banheiros)) {
              if (validarComodos(comodos)) {
                if (validarCep(cep)) {
                  return `[${identificador}] Imóvel: ${logradouro} ${endereco}, número: ${numero}, Bairro: ${bairro}, da cidade: ${cidade} foi registrado com sucesso (${data})`;
                } else {
                  return "CEP inválido";
                }
              } else {
                return "Número de cômodos inválido";
              }
            } else {
              return "Número de banheiros inválido";
            }
          } else {
            return "Número de quartos inválido";
          }
        } else {
          return "Metragem inválida";
        }
      } else {
        return "Número da residência inválido";
      }
    } else {
      return "Valor do aluguel inválido";
    }
  } else {
    return "Problema nos dados inseridos";
  } 
}

function vender (){
  let mensagem = registrarCasa()
  registrarHistorico(mensagem);
}