let wall,thickness;
let bullet,speed,weight
function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  wall=createSprite(750, 200,thickness,200);
  wall.shapeColor= color(204, 51, 0);
  bullet=createSprite(200,200,30,10);
  //car.shapeColor=color(0, 0, 204);
  bullet.velocityX = speed;

}
function draw() {
  background(59,90,7);  
  bullet.collide(wall);
  if(wall.x - bullet.x == (bullet.width+wall.width)/2) {
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}