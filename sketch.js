var cat, catImg1, catImg2, catImg3, catImg4 ;
var garden, gardenImg;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;

function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png" );
    gardenImg = loadImage("images/garden.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg4 = loadAnimation("images/cat4.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(700, 600, 20, 20);
    cat.addAnimation("cat", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(300, 600, 20, 20);
    mouse.addAnimation("mouse", mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    //background image 
    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
cat.addAnimation("catLastImage", catImg4 );
cat.changeAnimation("catLastImage");
cat.velocityX = 0;
cat.velocityY = 0;
cat.x = 350;
mouse.addAnimation("mouseLastImage", mouseImg4 );
mouse.changeAnimation("mouseLastImage");

}

    drawSprites();

}

function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseRunning", mouseImg2);
    mouse.changeAnimation("mouseRunning");
  }
}