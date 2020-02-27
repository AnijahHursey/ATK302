var myState = 0;
var timer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  // yellow rectangle
  background('black')
  fill('yellow');
  rect(width / 2, height / 2, 150, 400);

  switch (myState) {
    case 0: //red light
    fill('#ff0d00');
    ellipse(400, 270, 100, 100);
    fill('#ad7600');
    ellipse(400, 400, 100, 100);
    fill('#0c5c00');
    ellipse(400, 530, 100, 100);
    timer++
    if (timer >= 200) {
      timer = 0 ;
      myState = 1;
    }
      break;

    case 1: //orange light
    fill('#a30b03');
    ellipse(400, 270, 100, 100);
    fill('#ffae00');
    ellipse(400, 400, 100, 100);
    fill('#0c5c00');
    ellipse(400, 530, 100, 100);
    timer++
    if (timer >= 200) {
      timer = 0 ;
      myState = 2;
    }
      break;

    case 2: // green light
    fill('#a30b03');
    ellipse(400, 270, 100, 100);
    fill('#ad7600');
    ellipse(400, 400, 100, 100);
    fill('#22ff00');
    ellipse(400, 530, 100, 100);
    timer++
    if (timer >= 200) {
      timer = 0 ;
      myState = 0;
    }
      break;

  }
}
//lighter colors
//redfill('#ff0d00');
//orangefill('#ffae00');
//greenfill('#22ff00');
//darker colors
//redfill('#a30b03');
//orangefill('#ad7600');
//greenfill('#0c5c00');
