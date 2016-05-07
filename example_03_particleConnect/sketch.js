//the famous array
var ballList = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  for (var i = 0; i < 50; i++) {
      var newBall = new Particle(width/2, height/2);
      ballList.push(newBall);
  }
  stroke(255);
  background(0);
}

function draw() {
  //this is a trick! It creates that nice faded effect from frame to frame.
  fill(0, 10);
  rect (0, 0, width, height);

  //note that we're starting our for loop at 1, not 0. This happens because particles will draw a line back to the last particle and there's no -1 position in arrays!
  for (var i = 1; i < ballList.length; i++) {
      var prevX = ballList[i-1].x;
      var prevY = ballList[i-1].y;
      ballList[i].draw(prevX, prevY);
  }
}

function Particle(x, y) {

  this.velX = random (-5, 5);
  this.velY = random (-5, 5);

  this.x = x;
  this.y = y;

  this.draw = function(px, py) {
    line(px, py, this.x, this.y);

    this.x += this.velX;
    this.y += this.velY;

    if (this.x >= width || this.x <= 0) {
      this.velX *= -1;
    };

    if (this.y >= height || this.y <= 0) {
      this.velY *= -1;
    };
  }

}
