var myState = 0;

function preload() {

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('darkred');
  switch (myState) {
    case 0:
    fill('white');
  rect(0, 105, 800, 100);
  fill('white');
rect(0, 300, 800, 100);
      fill('white');
      textSize(30);
      text("parallel lines have so much in common.", 100, 100);
      break;

    case 1:
    fill('white');
  rect(0, 105, 800, 100);
  fill('white');
rect(0, 300, 800, 100);
      fill('white');
      textSize(30);
      text("It's a shame they'll never meet.", 100, 100);
      break;

  }
}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 1) {
    myState = 0;
  }
}
