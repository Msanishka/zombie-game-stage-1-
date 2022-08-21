var bg,bgImg;
var bgImg1 , bgImg2 ;
var player, playerImg ;
 var gameState =0
var ready , readyImg ;
var knifeImg  ;

function preload(){

  bgImg = loadImage("assets/bg.jpeg")
  bgImg1 = loadImage("assets/background 1.jpg")
  bgImg2 = loadImage("assets/background 2.jpg")
   readyImg = loadImage("assets/ready.jpg") 
   knifeImg = loadImage( "assets/KNIFE.png")
   playerImg = loadImage("assets/MAN.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2+200,displayHeight/2,20,20)
bg.addImage(bgImg1)
bg.scale = 5

ready = createSprite  (200,500);
ready.addImage (readyImg) ;



  // player.scale = 0.3
   //player.debug = true
  // player.setCollider("rectangle",0,0,300,300)


}

function draw() {
 background(0);
 drawSprites();
  fill ("red") 
  textSize (25)

  if (gameState===0) {
    textSize (25)
    text ("Jack being an adventure was on a trek on a mountain on his way back " , 400,400) ;
    text ("he was lost and he found a abandoned hotel and he looked around " , 400,450) ;
  }
 
    if (mousePressedOver(ready)) {
      bg.addImage(bgImg) ;
      bg.scale = 1
      gameState = 1 ;
      ready.visible = false ;
      
    } 

    if (gameState===1) {
     player = createSprite(500,displayHeight/2) ;
     player.addImage(playerImg) 
      player.scale = 1
    
    }


  //moving the player up and down and making the game mobile compatible using touches
/*if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}*/



}
