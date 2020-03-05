var varsity ;
var mic;
var vol;
var y = 0;

function setup() {
  createCanvas(800, 800);

  varsity= loadFont('assets/varsityregular.ttf') ;

  mic = new p5.AudioIn();
  mic.start();
}

function draw() {

  background('lightblue');
  push();
  translate(y, 0);

  fill('red');
  ellipse(455, 485, 140, 200)
  fill('black');
  ellipse(450, 300, 200, 200);
  fill('red');
  ellipse(450, 300, 190, 190);
  fill('black');
  ellipse(450, 300, 160, 160);
  fill('white');
  ellipse(450, 300, 150, 150);
  fill('black');
  ellipse(450, 300, 70, 70);
  fill('#691a00');
  ellipse(450, 300, 65, 65);
  fill('black');
  ellipse(450, 300, 20, 20);
  fill('#0A0300');
  arc(450, 290, 150, 150, 3.1, radians(0));
  fill('black');
  arc(495, 485, 60, 190, 180, radians(90));
  fill('red');
  arc(490, 490, 60, 190, 180, radians(90));
  fill('black');
  arc(415, 485, 60, 190, 1.59, radians(308));
  fill('red');
  arc(420, 490, 60, 190, 1.59, radians(308));
  fill('red');
  arc(455, 440, 90, 90, 3.2, radians(0));
  fill('white');
  arc(455, 440, 90, 90, 3.2, radians(0));
  fill('red');
  arc(455, 455, 80, 120, 3.2, radians(0));
  fill('black');
  quad(470, 580, 510, 565, 510, 660, 470, 660);
  fill('black');
  quad(400, 565, 440, 580, 440, 660, 400, 660);
  fill('black');
  arc(420, 660, 55, 55, 3.1, radians(0));
  fill('white');
  arc(420, 660, 50, 50, 3.1, radians(0));
  fill('black');
  arc(490, 660, 55, 55, 3.1, radians(0));
  fill('white');
  arc(490, 660, 50, 50, 3.1, radians(0));
  fill('black');
  arc(455, 550, 120, 90, 0, radians(180));
  fill('black');
  arc(480, 530, 75, 70, 3.3, radians(0));
  fill('red');
  arc(480, 530, 75, 65, 3.3, radians(0));
  fill('black');
  arc(430, 530, 75, 70, 3.11, radians(0));
  fill('red');
  arc(430, 530, 75, 65, 3.11, radians(0));
  fill('black');
  arc(455, 530, 75, 75, 3.1, radians(0));
  fill('red');
  arc(455, 530, 70, 70, 3.1, radians(0));

  pop();

  vol = mic.getLevel(); // level is between 0 and 1
  vol = vol * 100; // you may need to change this

  if (vol > 40) {
    // do something
    y++;

  }
  if (y > width/2) {
    y = 0;
  }

  fill('black')
  textSize(20);
  textFont(varsity, 30);
  text("Click the screen first.  My volume is " + vol, 80, 700);


}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
