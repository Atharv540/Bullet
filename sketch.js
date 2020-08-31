var wall, thickness;
var bullet, speed, weight;
function setup(){
  var canvas = createCanvas(1600,400);
  thickness = random(22,83);
  weight = random(30, 52);
  speed = random(223, 321);
  bullet = createSprite(10,200,10,10);
  fill("yellow");
  wall = createSprite(1200, 200, thickness, height/2);
}
function draw(){
  background(255,255,255);
  bullet.velocityX = speed;
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
