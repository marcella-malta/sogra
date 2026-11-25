let slideAtual = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSurpresa() {
  document.getElementById("tela1").classList.add("escondida");
  document.getElementById("tela2").classList.remove("escondida");
}

function mudarSlide(direcao) {
  // esconde a foto atual
  slides[slideAtual].classList.remove("ativo");

  // calcula a próxima posição
  slideAtual = slideAtual + direcao;

  // se passar da última, volta para a primeira
  if (slideAtual >= slides.length) {
    slideAtual = 0;
  }

  // se voltar antes da primeira, vai para a última
  if (slideAtual < 0) {
    slideAtual = slides.length - 1;
  }

  // mostra a nova foto e atualiza o contador
  slides[slideAtual].classList.add("ativo");
  document.getElementById("contador").textContent =
    (slideAtual + 1) + " / " + slides.length;
}