var dog ;
var karp ;
var leaf ;

function setup() {
  // put setup code here
createCanvas(1000, 1000) ;

  dog = loadImage("assets/dogs.jpg") ;
  karp = loadImage("assets/karp.jpg.optimal1.jpg") ;
  leaf = loadImage("assets/leaf.jpg") ;
}

function draw() {
  // put drawing code here
  image(dog, 0, 0, 200, 200) ;
  image(karp, 0, 200, 200, 200) ;
  image(leaf, 0, 400, 200, 200) ;
}
