body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to bottom, #d60000, #8b0000);
  color: white;
  text-align: center;
  padding: 50px;
}

h1 {
  font-size: 40px;
  margin-bottom: 20px;
}

.countdown {
  font-size: 32px;
  margin-top: 20px;
  font-weight: bold;
  letter-spacing: 2px;
}

footer {
  margin-top: 50px;
  font-size: 14px;
}
function atualizarContagem() {
  const natal = new Date("December 25, 2025 00:00:00").getTime();
  const agora = new Date().getTime();
  const diferenca = natal - agora;

  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

  setTimeout(atualizarContagem, 1000);
}

atualizarContagem();
