let player;
let token = 0;
var gameState = "START";
var opacity = 0;
var rectSize = 50
let timer = 10;
let audio = false;
let song1;
let hallway;
let stargazing;
let npc1 = false;
let npc2 = false;
let npc3 = false;
let score = 0;


function preload(){
  song1 = loadSound('https://illuistoffee.github.io/files/adventure.mp3');
  hallway = loadSound('https://illuistoffee.github.io/files/hallway.mp3');
  stargazing = loadSound('https://illuistoffee.github.io/files/stargazing.mp3');
}

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textFont('Courier New');
  rectMode(CENTER);
  textSize(20);
  
  player = {
    x: width/2,
    y: height-50,
    speed: 3.5,
    size: 30
  }
  
} 
  
function draw() {
  if (gameState == "START"){
    starting(); 
  } else if (gameState == "scene1"){
    if (audio === false){
      hallway.setVolume(1,3);
      hallway.loop();
      audio = true;
    }
    scene1();
  } else if (gameState == "intro"){
    intro();
  } else if (gameState == "wander"){
    if (audio === false){
      hallway.stop();
      song1.setVolume(0.6);
      song1.loop();
      audio = true;
    }
    wander();
  } else if (gameState == "rhythm"){
    rhythm();
  }
}

function starting(){
  background(230, 150, 190);
  text("Press Space to Start", width/2, height/2);
  if (keyIsDown(32)){
    gameState = "scene1";
  }
}

function scene1() {
  background(20);
  //scene1 variables
  let rectX = 400;
  var rectY = 250;
  let movementHeight;
  let bSpeed;
  
  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    movementHeight = 5;
    bSpeed = 0.2;
    rectSize += 0.5;
    opacity +=0.5;
  } else {
    movementHeight = 5;
    bSpeed = 0.03;
  }
  
  let breathe = sin(frameCount * bSpeed)*movementHeight;
  let yPos = rectY + breathe;
  stroke(100);
  strokeWeight(2);
  line(0, yPos-400, rectX, yPos+opacity/3);
  line(800, yPos-400, rectX, yPos+opacity/3);
  fill(70); 
  line(0, yPos+650, rectX-opacity/9, yPos-15);
  line(800, yPos+650, rectX+opacity/9, yPos-15);
  beginShape();
  vertex(0, yPos+650);
  vertex(rectX-opacity/9, yPos-15); 
  vertex(rectX+opacity/9, yPos-15); 
  vertex(800, yPos+650); 
  endShape(CLOSE);
  
  noStroke();
  fill(200);
  rect(rectX, yPos+opacity/4, rectSize, rectSize);
  text("move forward with 'w' or up arrow key", width/2, height-20);
  fill(255, 255, 255, opacity);
  rect(0,0,1600);
  if (opacity > 260){
    opacity = 0;
    audio = false;
    hallway.setVolume(0, 4);
    gameState = "intro";
  }
}

function intro(){
  textSize(32);
  fill(0,0,0,3);
  text("welcome.", width/2, height/2-50);
  
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
  }
  if (timer == 5){
    fill (250, 245, 170, 12);
    noStroke();
    rect(0,0, 1600,1600);
  }
  if (timer == 4){
    timer = 10;
    gameState = "wander";
  } 
}

function wander(){
  background(250,245,170);
  let blink = sin(frameCount * 0.08);
  let blink2 = map(blink, -1,1,0,500);
  
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) { 
    player.x -= player.speed; 
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    player.x += player.speed; 
  }
  if (keyIsDown(UP_ARROW) || keyIsDown(87)){
    player.y -= player.speed;
  }
  if (keyIsDown(DOWN_ARROW) || keyIsDown(83)){  
    player.y += player.speed;
  }
  player.x = constrain(player.x, 5, width -5);
  player.y = constrain(player.y, 5, height-5);
  
  fill(250, 170, 245);
  noStroke();
  circle(player.x, player.y, player.size);
  
  fill(0);
  rect(390,80,20);
  rect(80,400,20);
  
  fill(0,0,0, blink2);
  textSize(20);
  
  if (350 < player.x && player.x < 440 && player.y > 50 && player.y < 120){
    text("Press space to interact.", 160, height - 20);
    if (keyIsDown(32)){
      npc1 = true;  
    }
    if (npc1){
      fill(0);
      rect(width/2, 700, 780, 190)
      fill(255);
      text("hi! would you like to play a game for a token?", width/2, 650);
      text("sure! (c)", 100, 760);
      text("nahh. (b)", 700, 760);
      if (keyIsDown(66)){
        npc1 = false;
      }
      if (keyIsDown(67)){
        gameState = "rhythm";
        npc1 = false;
        song1.setVolume(0, 3);
      }
    }
  } 
  
  else if (40 < player.x && player.x < 120 && player.y > 360 && player.y < 440){
    text("Press space to interact.", 160, height - 20);
    if (keyIsDown(32)){
      npc1 = true;  
    }
    if (npc1){
      fill(0);
      rect(width/2, 700, 780, 190)
      fill(255);
      text("placeholder :P", width/2, 650);
      //text("sure! (c)", 100, 760);
      text("back (b)", 700, 760);
      if (keyIsDown(66)){
        npc1 = false;
      }
      if (keyIsDown(67)){
        gameState = "rhythm";
        npc1 = false;
        song1.setVolume(0, 3);
      }
    }
  } 
  else {
    text("wasd or arrow keys to move!", 180, height - 20);
  }
  
}

function rhythm(){
  let arrowY = 800;
  
  fill(0);
  rect(width/2, 700, 780, 190);
  fill(255);
  text("great! we can start when you are ready.", width/2, 650);
  text("press space to start.", width/2, 700);
  
  if (keyIsDown(32)){
    npc1 = true;
    song1.stop();
    stargazing.setVolume(1, 2);
    stargazing.play();
  }
  if (npc1){
    background(20);
    fill(255);
    noStroke();
    triangle(30, 75, 58, 20, 86, 75);
    fill(0);
    rect(width/2, 700, 780, 190);
    fill(255);
    text("score: " + score, width/2, 700);
  }
  
  
}
