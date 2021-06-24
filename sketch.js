var PLAY=1
var END=0
var gameState=PLAY

var climberI,climber
var doorI,door
var ghost1,ghost2,ghost
var towerI,tower
var climberGroup
var spooky

function preload() {
  climberI = loadImage("climber.png")
  doorI = loadImage("door.png")
  ghost1 = loadImage("ghost-jumping.png")
  ghost2 = loadImage("ghost-standing.png")
  towerI = loadImage("tower.png")
  spooky = loadSound("spooky.wav")
}

function setup() {
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerI);
  tower.velocityY=+2
  ghost = createSprite(100,100)
  ghost.addImage(ghost2)
  ghost.scale=0.3
  climberGroup = new Group();
  
  
}

function draw() {
  if(gameState === PLAY) {
    spooky.play();
    if(tower.y>400) {
    tower.y=300
  }
    if(keyDown(RIGHT_ARROW)) {
    ghost.x=ghost.x+6
  }
  if(keyDown(LEFT_ARROW)) {
    ghost.x=ghost.x-6
  }
  if(keyDown("space")) {
    ghost.velocityY=-10
  }
    ghost.velocityY=ghost.velocityY+0.8
  spawnclimber();
  if(climberGroup.isTouching(ghost)) {
      ghost.velocityY=0
    }
    
      
     if(ghost.y>600) {
      gameState=END
     }
    
  }
  else if (gameState===END){
     fill("red")
    textSize(50)
    textFont(BOLD);
    text("GAME OVER",150,250)
       tower.velocityY=0
    climberGroup.velocityY=0
   door.velocityY=0
    
    
  }
  
  
  
  
  
  
  
  
  
  drawSprites();
}
function spawnclimber() {
  if(frameCount % 160===0) {
    var door = createSprite(200,-50)
    var climber =createSprite(200,+10)
    door.addImage(doorI)
    climber.addImage(climberI)
    door.x=Math.round(random(400,100))
 climber.x=door.x
door.velocityY=+2
climber.velocityY=+2
door.lifetime=400
climber.lifetime=400
climberGroup.add(climber);
    ghost.depth=door.depth+1
    
    
  }
}
  


