var myState = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch (myState) {
    case 0:
      background('red');
      text("Hello State 0!", 100, 100);
      break;

    case 1:
      background('blue');
      text("Hello State 1!", 100, 100);
      break;

    case 2:
      background('green');
      text("Hello State 2!", 100, 100);
      break;

    case 3:
      background('yellow');
      text("Hello State 3!", 100, 100);
      break;

    case 4:
      background('orange');
      text("Hello State 4!", 100, 100);
      break;

    case 5:
      background('purple');
      text("Hello State 5!", 100, 100);
      break;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 5) {
    myState = 0;
  }
}
