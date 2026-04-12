var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var bug, swat, swat2;
var gameState = "L1";

function preload() {
  bug = loadImage('https://illuistoffee.github.io/files/mosquito.gif'); //target
  swat = loadImage('https://illuistoffee.github.io/files/flyswatter.png'); //user
  swat2 = loadImage('https://illuistoffee.github.io/files/flyswatter2.png');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
}

function draw() {
  background(230, 150, 190);
  if (gameState == "L1"){
    levelOne(); 
  } else if (gameState == "L2"){
    background(230, 150, 220);
    levelTwo();
  } else if (gameState == "L3"){
    background(200, 150, 230);
    levelThree();
  } else if (gameState == "L4"){
    background(150, 190, 230);
    levelFour();
  } else if (gameState == "L5"){
    background(230, 150, 220);
    levelFive();
  } else if (gameState == "WIN"){
    text("Score: " + score + "!!", width/2, height/2);
    background(magenta);  
  }
  text("Score: " + score, width/2, 40);
}

function levelOne(){
  text("level1", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5){
    gameState = "L2";
  }
  line(ballx, bally, mouseX, mouseY);
  image(bug, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(swat2, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(swat, mouseX-25, mouseY-25, 150, 150);
  }
  
} //end of lvl1

function levelTwo(){
  text("level2", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10){
    gameState = "L3";
  }
  image(bug, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(swat2, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(swat, mouseX-25, mouseY-25, 150, 150);
  }
} //end of lvl2

function levelThree(){
  text("level3", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 15){
    gameState = "L4";    
  }
  image(bug, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(swat2, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(swat, mouseX-25, mouseY-25, 150, 150);
  }
} //end of lvl3

function levelFour(){
  text("level4", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(20, width-20);
    bally = random(20, height-20);
    score = score + 1;
  }
  ballx += random(-5,5);
  
  if (score > 20){
    gameState = "L5";
  }
  image(bug, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(swat2, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(swat, mouseX-25, mouseY-25, 150, 150);
  }
} //end of lvl4
function levelFive(){
  text("level5", width/2, height-20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize/2 && mouseIsPressed === true) {
    ballx = random(10, width-10);
    bally = random(10, height-10);
    score = score + 1;
  }
  ballx += random(-5,5);
  bally += random(-5,5);
  
  if (score > 99){
    gameState = "WIN";
  }
  image(bug, ballx-20, bally-20, 40, 40);
  if (mouseIsPressed === true){
    image(swat2, mouseX-30, mouseY-30, 150, 150);
  } else {
    image(swat, mouseX-25, mouseY-25, 150, 150);
  }
} //end of lvl5
