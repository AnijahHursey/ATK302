function setup() {
  // put setup code here
   createCanvas(720, 400);

}

function draw() {
  // put drawing code here
  background('#5bbdc2');
 noStroke();

 fill('yellow');
 ellipse(50, 50, 50, 50);
 fill('#00b52a');
 ellipse(430, 60, 100, 100);
 fill('#3aff24');
 rect(0, 320, 720, 400);
 fill('green');
 ellipse(522, 95, 100, 100);
 fill('#033b10');
 ellipse(454, 106, 100, 100);
 fill('#00b52a');
 ellipse(518, 164, 100, 100);
 fill('#00b52a');
 ellipse(265, 155, 100, 100);
 //fill('#00b52a');
 //ellipse(415, 50, 100, 100);
 fill('#872a10');
 triangle(270, 60, 293, 360, 260, 360);
 fill('#872a10');
 triangle(522, 80, 340, 360, 260, 360);
 fill('#2aa145');
 ellipse(279, 65, 100, 100);
 fill('#872a10');
 triangle(350, 60, 340, 360, 260, 360);
 fill('green');
 ellipse(240, 115, 100, 100);
 fill('green');
 ellipse(350, 60, 100, 100);
 fill('#033b10');
 ellipse(290, 121, 100, 100);
 fill('#00b52a');
 ellipse(360, 124, 100, 100);
 fill('#2aa145');
 ellipse(500, 100, 100, 100);
 fill('green');
 ellipse(445, 154, 100, 100);

 //
 // fill(102);
 // rect(81, 81, 63, 63);
 //
 // fill(204);
 // quad(189, 18, 216, 18, 216, 360, 144, 360);
 //
 // fill(255);
 // ellipse(252, 144, 72, 72);
 //
 // fill(204);
 // triangle(288, 18, 351, 360, 288, 360);
 //
 // fill(255);
 // arc(479, 300, 280, 280, PI, TWO_PI);
 fill(0) ;
 textSize(30) ;
 text(mouseX + ", " + mouseY, 50, 50) ;
}
