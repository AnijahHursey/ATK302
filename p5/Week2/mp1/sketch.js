function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
background('white') ;
//stuff that we always want to show
  if (mouseIsPressed) {
    //stuff that show when the mouse is pressed
    fill('black');
   rect(500, 500, 1000, 1000);
    fill('red');
   rect(500, 372.5, 1000, 345);
    fill('blue');
    ellipse(455, 485, 140, 200)
    fill('black');
   ellipse(450, 300, 200, 200);
    fill('blue');
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
fill('white');
 arc(475, 285, 10, 10, 0, radians(0));
fill('black');
 arc(495, 485, 60, 190, 180, radians(90));
fill('blue');
 arc(490, 490, 60, 190, 180, radians(90));
 fill('black');
 arc(410, 500, 100, 220, 10, radians(308));
 fill('blue');
 arc(415, 505, 100, 220, 10, radians(308));
 fill('black');
 arc(370, 490, 30, 180, 3, radians(308));
 fill('blue');
 arc(370, 500, 30, 180, 3, radians(308));
 fill('black');
 ellipse(371, 495, 35, 35);
 fill('blue');
 ellipse(371, 492, 35, 35);
 fill('blue');
 arc(370, 495, 30, 180, 3, radians(308));


 fill('black');
 arc(415, 485, 60, 190, 1.59, radians(308));
 fill('blue');
  arc(420, 490, 60, 190, 1.59, radians(308));
  fill('blue');
   arc(455, 440, 90, 90, 3.2, radians(0));
  fill('white');
   arc(455, 440, 90, 90, 3.2, radians(0));
   fill('blue');
    arc(455, 455, 80, 120, 3.2, radians(0));
    fill('gray');
   quad(470, 580, 510, 565, 510, 660, 470, 660);
   fill('gray');
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
arc(455, 550, 125, 95, 0, radians(180));
fill('gray');
arc(455, 550, 120, 90, 0, radians(180));
fill('black');
arc(480, 530, 75, 70, 3.3, radians(0));
fill('blue');
arc(480, 530, 75, 65, 3.3, radians(0));
//fill('black');
//arc(430, 530, 75, 70, 3.11, radians(0));
//fill('blue');
//arc(430, 530, 75, 65, 3.11, radians(0));
fill('black');
arc(455, 530, 75, 75, 3.1, radians(0));
fill('blue');
arc(455, 530, 70, 70, 3.1, radians(0));
  } else {
    //when the mouse isn't pressed;
    fill('gray');
   rect(500, 500, 1000, 1000);
    fill('blue');
   rect(500, 372.5, 1000, 345);
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
  }


//fill(0);
//textSize(40);
  //text(mouseX.toFixed(0) + "," + mouseY);
  //fill(0) ;
  //textSize(30) ;
//  text(mouseX + ", " + mouseY, 50, 50) ;
}





//function mouseReleased(){
  //console.log(mouseX +", " + mouseY) ;}
