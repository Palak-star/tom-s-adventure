var PLAY = 1;
var END = 0;
var gameState = PLAY;

var tom, ground, invisible,needle;
var tomImg, groundImg,needleImg;

var needlesGroup;

var score=0;




function preload(){
  

  tomImg = loadImage("tom.gif");
  
  groundImg = loadImage("background.png");
  needleImg = loadImage("Needle.png")
  
 
}

function setup() {
  createCanvas(600, 500);
  
    invisible = createSprite(300,440,600,25);
    
    invisible.scale = 1
  
    tom = createSprite(150,440,20,20);
    tom.addImage(tomImg)
    tom.scale = 0.4

  ground = createSprite(200,200,400,20);
  ground.addImage("background",groundImg);
  ground.x = ground.width /2;
  ground.velocityX = -(6 + 3*score/100);
  ground.scale = 2
    
 needlesGroup = new Group();
  
  
}

function draw() {
  background("white");
  
  ground.x = ground.width /2;
  // ground.visible = true
  
 
   ground.depth = tom.depth;
    tom.depth = tom.depth + 1;
  
  tom.collide(invisible);
  
  spawnneedles()
  
  drawSprites();
}


  


function spawnneedles() {
  if(frameCount % 100 === 0) {
    
      needle = createSprite(80,500,10,40);
      needle.addImage("needle",needleImg);
      needle.velocityX = -(6 + 3*score/100);
      needle.scale = 0.2
  
    needle.y = Math.round(random(80,86));
    
     ground.depth = needle.depth;
    needle.depth = needle.depth + 1;
  
    
    needle.lifetime = 500;
   
    needlesGroup.add(needle);
  }
}

