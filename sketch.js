function setup() {
  createCanvas(800,400);
  hex = new Hex(200, 50);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  hex.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
