;
(function () {

  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}
  }

  var movingObject = Asteroids.movingObject = function (pos, vel, rad, color) {
    this.pos = pos;
    this.vel = vel;
    this.rad = rad;
    this.color = color;
  }

  movingObject.prototype.isCollidedWith = function (g) {
    for (var i = 0; i < g.allAsteroids.length; i++) {
      if (Asteroids.Util.distanceFrom(this.pos, g.allAsteroids[i].pos) < (this.rad)*2) {
        if (Asteroids.Util.distanceFrom(this.pos, g.allAsteroids[i].pos) != 0){
          console.log("COLLISION");
        };
      };
    };
  }

  movingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.rad,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
    ctx.closePath();
  };

  var wrap = function(pos){
    if (pos<0){ pos=pos+1000};
    return pos;
  }

  movingObject.prototype.move = function() {
    this.pos[0] = wrap((this.pos[0] + this.vel[0])% 1000);
    this.pos[1] = wrap((this.pos[1] + this.vel[1])% 1000);
  };


})();
