var x = 0;

function setup() {
  // put setup code here
  createCanvas(400, 400);
}

function draw() {
  // put drawing code here
  background('darkred');
  fill('white');
  textSize(40);
  text("Parasite", x, 100);
  //rect(x, 150, 100, 100);
  x = x + 5;
  if (x > width) {
    x = 0;
  }
}
