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
  ws = weather.wind.speed;
  temp = weather.main.temp;
  hum = weather.main.humidity;
}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background('lightblue');
      fill('yellow');
      ellipse(50, 100, 50, 50);
      fill('black');
      text("we have weather", 20, 220);
      // parse the weather object and put some text or images using at least 3 different weather data!
      text('The temperature is ' + weather.main.temp, 20, 240);
      text('The Humidity is ' + weather.main.humidity, 20, 260);
      text('The Windspeed is ' + weather.wind.speed, 20, 280);

      var color = 0;
      color = map(hum, 0, 200, 2, height - 10);

      noStroke();
      fill(color);
      ellipse(a, 110, 40, 40);
      fill(color);
      ellipse(b, 100, 50, 40);
      fill(color);
      ellipse(c, 115, 80, 40);
      fill(color);
      ellipse(d, 120, 60, 30);
      a = a + ws / 16;
      if (a > width) a = 0;
      b = b + ws / 16;
      if (b > width) b = 0;
      c = c + ws / 16;
      if (c > width) c = 0;
      d = d + ws / 16;
      if (d > width) d = 0;

      fill('green');
      rect(0, 300, 400, 100);
      fill('black');
      rect(width - 43, height - 15, 35, -300);
      fill('black');
      ellipse(width - 25.7, 85, 35, 35);
      fill('black');
      ellipse(width - 25, height - 25, 45, 45);
      fill('red');
      ellipse(width - 25, height - 25, 40, 40);



      fill('red');
      var temperature = 0;
      temperature = map(temp, -10, 200, 5, height - 10);
      rect(width - 40, height - 10, 30, -temp * 3);


      break;

  }
}
