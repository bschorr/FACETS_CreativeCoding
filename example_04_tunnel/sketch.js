var particleList = [];
var radius;
var addNoise;
var alpha;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  radius = 0;
  alpha = 0;
  stroke(alpha);

  for (var i = 0; i < 360; i+=5) {
    var posX = cos (radians(i)) * radius;
    var posY = sin (radians(i)) * radius;
    var newParticle = new Particle (posX, posY, i);
    particleList.push(newParticle);
  }

}

function draw() {
  translate (width/2, height/2);
  stroke(alpha);

  for (var i = 0; i < particleList.length; i++) {

    addNoise = noise(millis()*i)*30;

    var posX = cos (radians(particleList[i].angle)) * (radius + addNoise);
    var posY = sin (radians(particleList[i].angle)) * (radius + addNoise);

    particleList[i].update(posX, posY);
  }

  for (var i = 1; i < particleList.length; i++) {
      particleList[i].draw(particleList[i-1].x, particleList[i-1].y);
  }

  particleList[particleList.length-1].draw(particleList[0].x, particleList[0].y);

  radius += 4;
  alpha += 2;

}

function mouseClicked() {

}

function Particle (x, y, angle) {

  this.x = x;
  this.y = y;
  this.angle = angle;

  this.update = function(x, y) {
    this.x = x;
    this.y = y;
  }

  this.draw = function(prevX, prevY) {
    //ellipse (this.x, this.y, 10, 10);
    line (prevX, prevY, this.x, this.y);
  }

}
