
const imc = () => {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const result = document.getElementById("result");
  const resultText = document.getElementById("resultText");
  const imc = peso / (altura * altura);
  if (imc < 18.5) {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Abaixo do peso";
  } else if (imc >= 18.5 && imc < 24.9) {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Peso normal";
  } else if (imc >= 25 && imc < 29.9) {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Sobrepeso";
  } else if (imc >= 30 && imc < 34.9) {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Obesidade grau 1";
  } else if (imc >= 35 && imc < 39.9) {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Obesidade grau 2";
  } else {
    result.innerHTML = `IMC: ${imc.toFixed(2)}`;
    resultText.innerHTML = "Obesidade grau 3";
  }
};

document.getElementById("calcular").addEventListener("click", imc);
