//Variáveis dos carros
let xCarros = [610, 610, 610, 610, 610, 610];
let yCarros = [40, 96, 150, 210, 262, 320];
let velCarros = [5, 4, 7, 3, 2, 6];
let comprimentoCarros = 50;
let alturaCarros = 40;

//Mostrar o carro
function mostraCarros(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarros, alturaCarros);
    }
}

//Movimentar o carro
function movimentaCarros(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velCarros[i];
    }
}

function resetCarro(){
  for(let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTela(xCarros){
  return xCarros < -50;
}