var myState = 0;

function preload(){

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  background('gold');
  switch(myState){
    case 0:
    text("why did the chicken cross the road?", 100, 100);
    break ;

    case 1:
    text("to get to the other side", 100, 100);
    break ;

  }
}

function mouseReleased(){
  myState = myState + 1;
  if (myStatw > 1) {
    mystate = 0;
  }
}
