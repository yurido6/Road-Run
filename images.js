let imagemEstrada;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somTrilha;
let somPonto;
let somColisao;

function preload(){
  imagemEstrada = loadImage("images/estrada.png");
  imagemPersonagem = loadImage("images/ator-1.png");
  imagemCarro1 = loadImage("images/carro-1.png");
  imagemCarro2 = loadImage("images/carro-2.png");
  imagemCarro3 = loadImage("images/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro3, imagemCarro2];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somPonto = loadSound("sons/pontos.wav");
  somColisao = loadSound("sons/colidiu.mp3");
}