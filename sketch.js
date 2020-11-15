var character,ground;
var score=0;
var bullets;
var backgroundImg;
var coins;
var bombs;



function preload(){
  backgroundImg=loadImage("images/background.jpg");
  characterImg=loadImage("images/character.png");
  bulletImg=loadImage("images/bullet.png");
  coinsImg=loadImage("images/coins.png");
  bombsImg=loadImage("images/bomb.png");
   }

function setup() {
  createCanvas(800,400);
  
  character = createSprite(700,350,20,50);
  character.addImage("characterImg",characterImg);
  character.scale = 0.2;
  
 // coinsGroup2 = new Group();
  coinsGroup = new Group();
  bulletsGroup = new Group();
  bombsGroup = new Group();
}
 
function draw() {
  background(backgroundImg);  

  character.x = World.mouseX;

  fill("black");
  text("score:"+score,220,20);
  textSize(20);
  
  character.x = World.mouseX;
 
 /* if (keyDown("space")) {
    spawnBullets();
  }*/
 if(keyDown("space") && trex.y >= 159) {
    bullets.play();
    bullets.velocityY = -14;
  }

  /*if(bullets.isTouching(coins)){
    coins.destroyEach();
    bullets.destroyEach();
    score=score+2;
     }*/
     

spawnCoins();
spawnBombs();
spawnCoins2();
 spawnBullets(); 

  

  drawSprites();
}

/*function keyPressed() {
  if (keyCode === 32) {
     // Look at the hints in the document and understand how to make the package body fall only on
     //spawnBullets();
   Matter.Body.setStatic( spawnBullets, false);
  }
 }*/
 

function spawnCoins() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var coins = createSprite(790,120,40,10);
    coins.y = Math.round(random(80,120));
    coins.addImage(coinsImg);
    coins.scale = 0.2;
    coins.velocityX = -4;
    
     //assign lifetime to the variable
    coins.lifetime = 200;
    
    //add each cloud to the group
    coinsGroup.add(coins);
  }
}

function spawnCoins2() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var coins = createSprite(0,630,40,10);
    coins.y = Math.round(random(80,120));
    coins.addImage(coinsImg);
    coins.scale = 0.2;
    coins.velocityX = 3;
    
     //assign lifetime to the variable
    coins.lifetime = 300;
    
    //add each cloud to the group
    coinsGroup.add(coins);
  }
}


function spawnBullets() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var bullets = createSprite(50,30,40,10);
    bullets.y = Math.round(random(80,120));
    bullets.addImage(bulletImg);
    bullets.scale =0.04;
    bullets.velocityY = -11;
    bullets.y=character.y;
    bullets.x=character.x;
 
     //assign lifetime to the variable
     bullets.lifetime = 250;

    bulletsGroup.add(bullets);
  } 
}

function spawnBombs() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var bombs = createSprite(800,120,40,10);
    bombs.y = Math.round(random(80,120));
    bombs.addImage(bombsImg);
    bombs.scale =0.2;
    bombs.velocityX = -3;
    
     //assign lifetime to the variable
     bombs.lifetime = 200;

    bombsGroup.add(bombs);
  }
  
}
