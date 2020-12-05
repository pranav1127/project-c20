var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(500,200,20,100);
car.velocityX=speed;
car.shapeColor="blue"
wall.shapeColor="red"
}

function draw() {
  background(235, 97, 52);  
  if (wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0
var deform=.5*weight*speed*speed/22509;
if(deform>180){
car.shapeColor=color(255,0,0);
}
if(deform<180 && deform>100){

  car.shapeColor=color(151, 232, 182);
}
if(deform<100){

  car.shapeColor=color(189, 151, 232);
}

  }
  drawSprites();
}