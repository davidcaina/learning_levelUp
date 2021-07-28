var tituloAntigo = document.querySelector(".oldH1");
tituloAntigo.textContent = "Teste de mudança do h1";

var primeiroElemento = document.querySelector("#primeiroPaciente");

var pesoValido = true;
var alturaValida = true;

//trecho do código referente ao peso.
var peso = primeiroElemento.querySelector(".info-peso");
var valorDoPeso = peso.textContent;

//validação do peso
if (valorDoPeso <= 0 || valorDoPeso >= 1000) {
  pesoValido = false;
  peso.textContent = "Peso inválido";
}

//trecho do código referente a altura.
var altura = primeiroElemento.querySelector(".info-altura");
var valorDaAltura = altura.textContent;

//validação da altura
if (valorDaAltura >= 3.0 || valorDaAltura <= 0) {
  alturaValida = false;
  altura.textContent = "Altura inválida";
}

//validação de peso e altura
if (alturaValida && pesoValido) {
  var imcAtual = primeiroElemento.querySelector(".info-imc");
  var imc = peso / (altura * altura);
  imcAtual.textContent = imc;
}