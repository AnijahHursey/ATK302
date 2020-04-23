function setup() {
  // put setup code here
  createCanvas(400, 400);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background('black');

cloud();

}
function cloud(){
  noStroke();
  fill('white');
  ellipse(100, 100, 40, 40);
  fill('white');
  ellipse(120, 90, 50, 40);
  fill('white');
  ellipse(125, 105, 80, 40);
  fill('white');
  ellipse(90, 110, 60, 30);
}
