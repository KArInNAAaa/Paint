// Project Title
// Your Name: savannah roslan
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


//Declare variables here
let brushColor;

//function setup()



function setup() {
  //This function get run once at the start of the program
  createCanvas(400, 400);
  background(240);
  brushColor = color(0,0,0);

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

function changeColor() {
} if (mouseY < 20 && mouseIsPressed) {
  if (mouseX < 40) {
    brushColor = 'black';
  }
  else if (mouseX < 80) {
    brushColor = 'white';
  }
  else if (mouseX < 120) {
    brushColor = 'red';
  }
  else if (mouseX < 160) {
    brushColor = ('orange');
  }

}



//if (mouseY < 20 && mouseIsPressed) {

//brushColor = 'black';
//}




function draw() {
  //This loop gets run over and over again
  brushX = mouseX;
  brushY = mouseY;

  //call the drawColorPicker function
  //function drawColorPicker() {


  drawColorPicker();

  if (mouseIsPressed) {
    stroke(150, 0, 0);
    strokeWeight(2);
    line(brushX, brushY, pmouseX, pmouseY);
  }
  // 	text(mouseX + ", " + mouseY, 350, 350);
}


