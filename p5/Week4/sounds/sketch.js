  var song1;

function preload() {
  song1 = loadSound('assets/bells.mp3');
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);
  song1.play();  // this is what starts the sound

}

function draw() {

}


function draw() {
  // put drawing code here
}
function touchStarted() {
  getAudioContext().resume();
}
