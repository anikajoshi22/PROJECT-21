var bullet;
var wall;
var speed;
var weight;
var thickness;
var height;

function preload(){

}

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  height=400;
 
  
   wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  bullet=createSprite(50,200,50,20);
  bullet.shapeColor="white";
}

function draw() {
  background("black");
bullet.velocityX=speed;





if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  

  if(damage>10){
    wall.shapeColor="red";
  }

  if(damage<10){
    wall.shapeColor="green";
  }
}


 drawSprites(); 
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
