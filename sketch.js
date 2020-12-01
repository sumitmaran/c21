var fixedRect, movingRect;
var ball,bat;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball=createSprite(200,200,20,20);
  ball.velocityX=6;
  bat=createSprite(1000,200,40,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if( isTouching(movingRect,fixedRect)){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
 }

 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  bounceOff(ball,bat);
 }
  drawSprites();
}







