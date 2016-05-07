var ball;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  //create an instance of Particle
  ball = new Particle(width/2, height/2);
}

function draw() {
  background(0);
  fill(255);
  ball.draw();
}

//function Particle is like a class in traditional processing. It's not built in P5 like setup and draw.
function Particle(x, y) {

  //note the use of 'this' all along this function This makes sure to tell our browser that the instances of each variable are only particular to this intance of the particle.
  this.velX = 5;
  this.velY = 3;

  this.x = x;
  this.y = y;

  //the draw function will be called to update each particle instance
  this.draw = function() {
    ellipse (this.x, this.y, 50, 50);

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
