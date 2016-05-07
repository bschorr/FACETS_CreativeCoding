//Create an array to hold the particles. In JS you don't need to declare the data type of an array
var ballList = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  //create 500 instances of Particle
  for (var i = 0; i < 500; i++) {
      var newBall = new Particle(width/2, height/2);
      ballList.push(newBall);
  }

  noStroke();

  //note that we're calling background only once in the setup and then not again in the draw.
  background(0);
}

function draw() {
  fill(255);

  //cal draw for each of the 500 balls
  for (var i = 0; i < 500; i++) {
      ballList[i].draw();
  }
}

function Particle(x, y) {

  this.velX = random (-5, 5);
  this.velY = random (-5, 5);
  this.col = color (random(255), random(255), random(255));

  this.draw = function() {
    fill (this.col);

    ellipse (x, y, 10, 10);

    x += this.velX;
    y += this.velY;

    if (x >= width || x <= 0) {
      this.velX *= -1;
    };

    if (y >= height || y <= 0) {
      this.velY *= -1;
    };
  }

}
