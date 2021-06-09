var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var f1,f1_Img;
 

var form, player, game;
var s;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f1_Img=loadImage("images/f1.png")
  s=loadSound("sound/sliding.mp3")

}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
  obstacles=createGroup();
  for(i=0; i<5; i++) {
    uu=random(200,950)
    h=random(-height*4,height-300)
    f1=createSprite(uu,h);
    f1.addImage('f1',f1_Img)
    obstacles.add(f1)
  }



 // finishedPlayers = 0;
 yVel = 0;
 xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
