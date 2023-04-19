//Variáveis dos personagens
let xPersonagem1 = 80;
let yPersonagem1 = 368;
let colisao = false;
let pontos = 0;


//Mostrar o personagem
function mostraPersonagem1(){
 image(imagemPersonagem, xPersonagem1, yPersonagem1, 30, 30); 
}

//Movimentar o personagem
function movimentaPersonagem1(){
  if (keyIsDown(UP_ARROW)){
    yPersonagem1 -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if (limiteInferior()){
      yPersonagem1 +=3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)){
    if (limiteDireita()){
      xPersonagem1 +=3;
  
    }
  }
  if (keyIsDown(LEFT_ARROW)){
    if (limiteEsquerda()){
      xPersonagem1 -=3;
  
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter);
  for (i = 0; i < imagemCarros.length; i = i + 1){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarros, alturaCarros, xPersonagem1, yPersonagem1, 15);
    if (colisao){
      resetPersonagem();
      somColisao.play();
      if (pontosPositivos()){
        pontos -= 1;
      }
    }
  }
}

function resetPersonagem(){
  yPersonagem1 = 368;
}

function mostraPontos(){
  textAlign(CENTER);
  stroke(0, 0, 0)
  fill(255, 165, 0);
  textSize(26);
  text(pontos, width/5, 27);
}

function marcaPontos(){
  if (yPersonagem1 < 15){
    pontos += 1;
    somPonto.play();
    resetPersonagem();
  }
}

function pontosPositivos(){
  return pontos > 0;
}

function limiteInferior(){
  return yPersonagem1 < 370;
}

function limiteDireita(){
  return xPersonagem1 < 570;
}

function limiteEsquerda(){
  return xPersonagem1 > 30;
}