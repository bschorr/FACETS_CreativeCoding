var particleList = [];
var radius;

//alpha will set the coor of the stroke
var alpha;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  radius = 0;
  alpha = 0;
  stroke(alpha);

  //in this for loop we're ditributing 360/5 = 72 particles along a circumference using sin and cos.
  //in P5 angles need to be expressed in radians. You can use the radians() function to convert from degrees to radians.
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

    var addRandom = random(30);

    var posX = cos (radians(particleList[i].angle)) * (radius + addRandom);
    var posY = sin (radians(particleList[i].angle)) * (radius + addRandom);

    particleList[i].update(posX, posY);
  }

  for (var i = 1; i < particleList.length; i++) {
      particleList[i].draw(particleList[i-1].x, particleList[i-1].y);
  }

  particleList[particleList.length-1].draw(particleList[0].x, particleList[0].y);

  radius += 4;
  alpha += 2;

}

//Particles need to know where in the 360 spectrum they stand.
function Particle (x, y, angle) {

  this.x = x;
  this.y = y;
  this.angle = angle;

  //in this particle we've broken out the drw into draw and update function
  this.update = function(x, y) {
    this.x = x;
    this.y = y;
  }

  this.draw = function(prevX, prevY) {
    line (prevX, prevY, this.x, this.y);
  }

}
