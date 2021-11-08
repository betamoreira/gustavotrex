
var solo2;
var trex, trex_correndo, edges;
var solo, imagen_do_solo;

function preload(){

  trex_correndo = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  imagensolo = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  trex = createSprite(30,160,20,50);
  trex.addAnimation("running", trex_correndo); 
  trex.scale = 0.5;

  solo = createSprite(300,180,600,20);
  solo.velocityX = -4
  solo.addImage("ground",imagensolo);
  solo.x = solo.width/2;
  
  solo2 = createSprite(300,190,600,10);
  solo2.visible = false;

  var rand = Math.round(random(10,60));

}

function draw(){
  background(220);

  console.log(frameCount);

  if(keyDown("space") && trex.y >160){
    trex.velocityY = -12;
  }
  if (solo.x<0){
    solo.x = solo.width/2;
  }

  trex.velocityY = trex.velocityY+0.5;

  trex.collide(solo2);

  gerarNuvens();

  drawSprites();
}

function gerarNuvens(){
  //código para gerar as nuvens


}
