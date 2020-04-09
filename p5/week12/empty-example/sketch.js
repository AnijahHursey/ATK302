function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
x = width ;
y = height /2;
r = width ;
g = width ;
b = width ;
}

function draw() {
  // put drawing code here
menu();
}
function rocket() {
fill('yellow');
triangle(360, 400, 440, 400, 400, 440);
fill('red');
ellipse(400, 405, 80, 50);
fill('gray');
ellipse(400, 400, 80, 50);
fill('lightblue');
ellipse(400, 390, 50, 40);
}

function menu(){
background('black');
stroke(50);
fill('green');
ellipse(x, y, 30, 30);
fill('purple');
ellipse(r, 200, 40, 40);
fill('orange');
ellipse(b, 500, 70, 70);
fill('red');
ellipse(g, 750, 60, 60);

x = x - 4;
r = r - 5;
b= b - 2;
g = g - 3;

if(x <= 0){
  x = width ;
}
if(r <= 0){
  r = width ;
}
if(b <= 0){
  b = width ;
}
if(g <= 0){
  g = width ;
}

fill('yellow');
triangle(360, 400, 440, 400, 400, 440);
fill('red');
ellipse(400, 405, 80, 50);
fill('gray');
ellipse(400, 400, 80, 50);
fill('lightblue');
ellipse(400, 390, 50, 40);

noStroke();
fill('red');
triangle(200, 500, 150, 550, 250, 550);
fill('black');
triangle(200, 510, 150, 550, 250, 550);
fill('red');
triangle(200, 660, 150, 610, 250, 610);
fill('black');
triangle(200, 650, 150, 610, 250, 610);
fill('red');
triangle(300, 580, 250, 530, 250, 640);
fill('black');
triangle(290, 580, 250, 530, 250, 640);
fill('red');
triangle(100, 580, 150, 530, 150, 640);
fill('black');
triangle(110, 580, 150, 530, 150, 640);
}
function ufo() {
fill('gray');
ellipse(400, 400, 50, 40);
fill('lightblue');
ellipse(400, 400, 30, 30);
}
