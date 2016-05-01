//initial positions and velocity
var x, y;
var velX, velY;

function setup() {
  //window size canvas
  createCanvas(window.innerWidth, window.innerHeight);
  fill(255);

  //initial position at center of window
  x = width/2;
  y = height/2;

  //arbitrarily defined initial velocities
  velX = 5;
  velY = 3;

}

function draw() {
  //background update and fill
  background(0);
  fill(255);

  //draw ellipse
  ellipse (x, y, 50, 50);

  //update ellipse position
  x += velX;
  y += velY;

  //check screen edges
  if (x >= width || x <= 0) {
    velX *= -1;
  };

  if (y >= height || y <= 0) {
    velY *= -1;
  };

}
