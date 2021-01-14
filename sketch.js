var canvas;
var music;
var cs1, cs2, cs3, cs4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(650,600);
    cs1=createSprite(100, 570, 130, 30);
    cs1.shapeColor="darkBlue";
    cs2=createSprite(250, 570, 130, 30);
    cs2.shapeColor="orange";
    cs3=createSprite(400, 570, 130, 30);
    cs3.shapeColor="red";
    cs4=createSprite(550, 570, 130, 30);
    cs4.shapeColor="darkGreen";
    box=createSprite(250, 200, 40, 40);
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));
    
    createEdgeSprites();
    box.bounceOff(edges);
   



  
  drawSprites();
}
