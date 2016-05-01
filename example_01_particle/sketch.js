var ball;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ball = new Particle(width/2, height/2);
}

function draw() {
  background(0);
  fill(255);
  ball.draw();
}

function Particle(x, y) {

  velX = 5;
  velY = 3;

  this.draw = function() {
    ellipse (x, y, 50, 50);

    x += velX;
    y += velY;

    if (x >= width || x <= 0) {
      velX *= -1;
    };

    if (y >= height || y <= 0) {
      velY *= -1;
    };
  }

}
