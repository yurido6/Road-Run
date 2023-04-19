function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
  
}

function draw() {
  background(imagemEstrada);
  mostraPersonagem1();
  mostraCarros();
  movimentaPersonagem1();
  movimentaCarros();
  resetCarro();
  verificaColisao();
  mostraPontos();
  marcaPontos();
}