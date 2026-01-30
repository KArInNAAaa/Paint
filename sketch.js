// Project Title: P5JS PAINT
// Your Name: savannah roslan
// Date 01/29/26
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Declare variables here
let brushColor;
let brushSize;
//function setup()



function setup() {
  //This function get run once at the start of the program
  createCanvas(400, 400);
  background(240);
  brushColor = color(0, 0, 0);
  brushSize = 2;
  //initialize brushColor

}

function drawColorPicker() {
  // write code to draw the color picker here:
  fill('black');
  rect(0, 0, width / 8, 20);
  fill('white');
  rect(50, 0, width / 8, 20);
  fill('red');
  rect(100, 0, width / 8, 20);
  fill('orange');
  rect(150, 0, width / 8, 20);
  fill('yellow');
  rect(200, 0, width / 8, 20);
  fill('green');
  rect(250, 0, width / 8, 20);
  fill('blue');
  rect(300, 0, width / 8, 20);
  fill('purple');
  rect(350, 0, width / 8, 20);

}

//color changer
function changeColor() {
if (mouseY < 20 && mouseIsPressed) {
  if (mouseX < 50) {
    brushColor = color(0, 0, 0);
  }
  else if(mouseX < 100 && mouseIsPressed) {
    brushColor = color(255, 255, 255);
  }
  else if(mouseX < 150) {
  brushColor = color(255,0,0);
  }
  else if (mouseX < 200) {
  brushColor = color(255,165,0);
  }
  else if(mouseX < 250){
  brushColor = color(255,255,0);
  }
   else if(mouseX < 300){
    brushColor = color(0,255,0);
  }
  else if(mouseX < 350){
    brushColor = color (0,0,255);
}
else if(mouseX < 400){
  brushColor = color(128,0,128);
}
}
if(mouseX > 5 && mouseX < 45){
  if(mouseY > 380 && mouseY < 395){
  brushColor = color(240);
 }
}
}

//eraser & Brush Stroke
function keyPressed(){
  if(key === "c"){
  background(240);
  }
  if(key === "1"){
    brushSize = 1;
  }
  if(key === "2"){
    brushSize = 2;
  }
  if(key === "3"){
    brushSize = 3;
  }
  if (key === "4"){
    brushSize = 4;
  }
  if (key === "5"){
    brushSize = 5;
  }
  if (key === "6"){
    brushSize = 6;
  }
  if (key === "7"){
    brushSize = 7;
  }
  if (key === "8"){
    brushSize = 8;
  }
  if (key === "9"){
    brushSize = 9;
  }
  if (key === "0"){
    brushSize = 10;
  }
}

function drawEraser(){
  fill('pink');
  rect(5,380,40,15);
}

function draw() {
  //This loop gets run over and over again
  brushX = mouseX;
  brushY = mouseY;

  //call the drawColorPicker function
  //function drawColorPicker() {

  changeColor();
  drawColorPicker();
  drawEraser();

  if (mouseIsPressed) {
    stroke(brushColor);
    strokeWeight(brushSize);
    line(brushX, brushY, pmouseX, pmouseY);
  }
  // 	text(mouseX + ", " + mouseY, 350, 350);
}





