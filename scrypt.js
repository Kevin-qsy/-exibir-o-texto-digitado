function executarCallback(callback) {
  callback();
}

function exibirTexto() {
  const texto = document.getElementById("entrada").value;
  const saida = document.getElementById("saida");
  saida.innerText = texto;
}
