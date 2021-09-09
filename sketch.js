var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,chainsawImg,axeImg,zombieImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  chainsawImg = loadImage("chainsaw.png");
  axeImg = loadImage("axe.png");
  zombieImg = loadImage("zombie1.png");
  endImg =loadAnimation("gameOver.png");
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
  
cashG=new Group();
chainsawG=new Group();
axeG=new Group();
zombiesGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCash();
    createChainsaw();
    createAxe();
    createZombies();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection = treasureCollection + 1;
    }
    else if (chainsawG.isTouching(boy)) {
      chainsawG.destroyEach();
      treasureCollection = treasureCollection + 1;

      
    }else if(axeG.isTouching(boy)) {
      axeG.destroyEach();
      treasureCollection = treasureCollection + 1;



      
    }else{
      if(zombiesGroup.isTouching(boy)) {
        gameState = END;
        boy.addAnimation("sahilRunning", endImg);
        boy.x = 200
        boy.y = 300
        cashG.destroyEach();
        cashG.setVelocityYEach(0);
        chainsawG.destroyEach();
        chainsawG.setVelocityYEach(0);
        axeG.destroyEach();
        axeG.setVelocityYEach(0);
        zombiesGroup.destroyEach();
        zombiesGroup.setVelocityYEach(0);
        
    }
    
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Supplies: "+ treasureCollection,150,30);
  }

}

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createChainsaw() {
  if (World.frameCount % 320 == 0) {
  var chainsaw = createSprite(Math.round(random(50, 350),40, 10, 10));
  chainsaw.addImage(chainsawImg);
  chainsaw.scale=0.03;
  chainsaw.velocityY = 3;
  chainsaw.lifetime = 150;
  chainsawG.add(chainsaw);
}
}

function createAxe() {
  if (World.frameCount % 410 == 0) {
  var axe = createSprite(Math.round(random(50, 350),40, 10, 10));
  axe.addImage(axeImg);
  axe.scale=0.13;
  axe.velocityY = 3;
  axe.lifetime = 150;
  axeG.add(axe);
  }
}

function createZombies(){
  if (World.frameCount % 530 == 0) {
  var zombie = createSprite(Math.round(random(50, 350),40, 10, 10));
  zombie.addImage(zombieImg);
  zombie.scale=0.7;
  zombie.velocityY = 3;
  zombie.lifetime = 200;
  zombiesGroup.add(zombie);
  }
}