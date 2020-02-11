var x = 0;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  // put drawing code here
  background('gray');

  push();
  translate(x, 0);
  eyvan();
  pop();

  x += 5 ;
  if (x > width){
    x = 0 ;
  }

}

function eyvan() {
  noStroke();
  fill('lightblue');
  ellipse(455, 485, 140, 200)
  fill('black');
  ellipse(450, 300, 200, 200);
  fill('lightblue');
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
  fill('lightblue');
  arc(490, 490, 60, 190, 180, radians(90));
  fill('black');
  arc(415, 485, 60, 190, 1.59, radians(308));
  fill('lightblue');
  arc(420, 490, 60, 190, 1.59, radians(308));
  fill('lightblue');
  arc(455, 440, 90, 90, 3.2, radians(0));
  fill('white');
  arc(455, 440, 90, 90, 3.2, radians(0));
  fill('lightblue');
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
  fill('lightblue');
  arc(480, 530, 75, 65, 3.3, radians(0));
  fill('black');
  arc(430, 530, 75, 70, 3.11, radians(0));
  fill('lightblue');
  arc(430, 530, 75, 65, 3, radians(0));
  fill('black');
  arc(455, 530, 75, 75, 3.1, radians(0));
  fill('lightblue');
  arc(455, 530, 70, 70, 3, radians(0));

}
