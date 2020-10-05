var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
   movingRect = createSprite(400, 200, 50, 30);
   movingRect.shapeColor = "red";
   movingRect.debug =true;
   fixedRect = createSprite(200, 200, 50, 80);
   fixedRect.shapeColor = "red";
   fixedRect.debug = true;
}

function draw() {
  background("white");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x- fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x  < fixedRect.width/2 + movingRect.width/2
    && movingRect.y- fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y  < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
else{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red"; 
}
  drawSprites();
}