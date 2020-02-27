var myState = 0;
var timer = 0;
var word;

function preload() {

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
  word = loadImage("assets/word.png");
}

function draw() {
  // put drawing code here
  //timer = timer - 1;

  background('white');
  switch (myState) {
    case 0:
      textSize(20);
      text("Someone stole my Microsoft Office and they're gonna pay.", 200, 200);
      timer++
      if (timer >= 300) {
        timer = 0;
        myState = 1;
      }
      break;

    case 1:
      textSize(50);
      text("You have my Word.", 300, 200);
      image(word, 400, 400, 200, 200);
      timer++
      if (timer >= 300) {
        timer = 0;
        myState = 0;
      }
      break;

  }
}
