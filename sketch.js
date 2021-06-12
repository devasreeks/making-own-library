var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "pink";


  movingRect = createSprite(400,800,70,50);
  movingRect.shapeColor = "pink";

  object1 = createSprite(100,200,50,50);
  object1.shapeColor = "pink";

  object2 = createSprite(200,200,50,50);
  object2.shapeColor = "pink";

  object3 = createSprite(300,200,50,50);
  object3.shapeColor = "pink";

  object4 = createSprite(400,200,50,50);
  object4.shapeColor = "pink";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(255,255,255);

bounceOff(movingRect,fixedRect);

if(isTouching(movingRect, fixedRect)){
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
 
  drawSprites();
}

