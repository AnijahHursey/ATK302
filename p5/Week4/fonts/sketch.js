var varsity ;
function setup() {
  // put setup code here
  createCanvas(1000, 1000) ;
  varsity= loadFont('assets/varsityregular.ttf') ;
}

function draw() {
  // put drawing code here
  textFont(varsity, 100) ;
  text("HELLO!", 500, 500) ;

}
