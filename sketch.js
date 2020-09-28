var wall1;
var player;
function preload(){

}

function setup(){
createCanvas(1600, 1600);

player = createSprite(800, 800, 50, 50);
player.shapeColor = "blue";

wall1 = new Wall(700, 800, 100, 50);
}

function draw(){
background("brown");

if(keyDown("w")){
  player.velocityY = -5; 
}

if(keyDown("s")){
  player.velocityY = 5;
}

if(keyDown("a")){
  player.velocityX = -5;
}

if(keyDown("d")){
  player.velocityX = 5;
}

wall1.display();

drawSprites();
}