var heartImg, bgImg, shooterImg, shootingImg, zombieImg; 

var heart, bg, shooter, shooting, zombie;

var zombieGrp;

function preload(){
heartImg = loadImage("Images/heart_1.png");

bgImg = loadImage("Images/bg.jpeg");

shooterImg = loadImage("Images/shooter_2.png");
shootingImg = loadImage("Images/shooter_3.png");

zombieImg = loadImage("Images/zombie.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  zombieGrp = new Group();

  bg = createSprite(displayWidth/2-20, displayHeight/2-20, 20, 20);
  bg.scale = 1.1;
  bg.addImage(bgImg);

  shooter = createSprite(displayWidth-1200, displayHeight-300, 20, 20);
  shooter.scale = 0.5;
  shooter.addImage(shooterImg);

  
}

function draw() {
  background(255,255,255); 
  
  spawnEnemy();

  drawSprites();
}

function spawnEnemy(){

  if(frameCount % 80 === 0){

    zombie = createSprite(random(500, 1100), random(100, 500), 20, 20);
    zombie.scale = 0.2;
    zombie.addImage(zombieImg);
    zombie.velocityX = -3;
    zombie.lifetime = 400;
    zombieGrp.add(zombie);

  }
}