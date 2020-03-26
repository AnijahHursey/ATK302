var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('red');
  rect(x, 10, 20, 10);
ellipse(x - 5, 18, 10, 10);
ellipse(x + 5, 18, 10, 10);
x = x + 3;

if (x > width){
  x = 0;
 }
}
