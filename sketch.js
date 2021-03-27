function setup() {
  createCanvas(800,400);
  FixedRect=createSprite(400, 200, 50, 50);
  MovingRect=createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  MovingRect.x = mouseX; 
  MovingRect.y = mouseY; 
  if (MovingRect.width/2+FixedRect.width/2>=MovingRect.x-FixedRect.x
    &&MovingRect.width/2+FixedRect.width/2>=FixedRect.x-MovingRect.x
    &&MovingRect.height/2+FixedRect.height/2>=MovingRect.y-FixedRect.y
    &&MovingRect.height/2+FixedRect.height/2>=FixedRect.y-MovingRect.y){ 
    MovingRect.shapeColor= "blue";
    FixedRect.shapeColor= "blue";
  }
  else {
    MovingRect.shapeColor= "black";
    FixedRect.shapeColor= "black";
  }
  drawSprites();
}