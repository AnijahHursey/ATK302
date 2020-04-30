var weather;
var temp = 0;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var a = 10;
var b = 30;
var c = 35;
var d = 0;
var ws = 0;
var temp = 0;
var hum = 0;


function setup() {
  createCanvas(400, 400);

  // HERE Is the call to get the weather. PLEASE PUT YOUR OWN ID IN HERE!!!
  // MINE WILL STOP WORKING IF EVERYONE USES IT!!!

  var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61701,us&units=imperial&';
  var myIDString = 'appid=e2fa4c4d278a983260b351d197725d07'; // Take out the x’s and ADD YOUR ID!!!
  loadJSON(myJSONString + myIDString, gotData); // look - that gotData function happens when JSON comes back.

}


function gotData(data) {
  weather = data;
  console.log(data); // for debugging purposes, print out the JSON data when we get it.
  ws = weather.wind.speed ;
  temp = weather.main.temp ;
  hum = weather.main.humidity ;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
          myState = 1;
      }
      break;

    case 1:
    background('lightblue') ;
    fill('yellow');
    ellipse(50, 30, 50, 50);
    fill('black');
    text("we have weather", 20, 20) ;
// parse the weather object and put some text or images using at least 3 different weather data!
text('The temperature is ' + weather.main.temp, 20, 40);
text('The Humidity is ' + weather.main.humidity, 20, 60);
text('The Windspeed is ' + weather.wind.speed, 20, 80);

var color = 0;
color = map(hum, 0, 200, 2, height-10);

noStroke();
fill(color);
ellipse(a, 110, 40, 40);
fill(color);
ellipse(b, 100, 50, 40);
fill(color);
ellipse(c, 115, 80, 40);
fill(color);
ellipse(d, 120, 60, 30);
a = a + ws/2;
if (a > width) a = 0 ;
b = b + ws/2;
if (b > width) b = 0 ;
c = c + ws/2;
if (c > width) c = 0 ;
d = d + ws/2;
if (d > width) d = 0 ;

fill('green');
rect(0, 300, 400, 100);

fill('white');
rect(width-45, height-5, 40, -200);
fill('white');
ellipse(width-25, height/2, 40, -390);
fill('red');
var temperature = 0;
temperature = map(temp, -10, 90, 2, height-10) ;
rect(width-40, height-10, 30, -temp) ;


      break;

  }
}
