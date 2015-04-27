;
(function () {

  if (typeof Asteroids === "undefined"){
    window.Asteroids = {}
  }

  var Game = Asteroids.Game = function () {
    this.allAsteroids = [];
    this.DIM_X = 1000;
    this.DIM_Y = 1000;
    this.NUM_ATEROIDS = 10;
    }

  Game.prototype.addAsteroids = function () {
    for(var i = 0; i < 2; i++) {
      var pos = [Math.random() * 1000, Math.random() * 1000]
      this.allAsteroids.push(new Asteroids.Asteroid(pos));
    };
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0,0,10000, 10000);
    for(var i = 0; i < this.allAsteroids.length; i++) {
      this.allAsteroids[i].draw(ctx);
    };
  };

  Game.prototype.move = function() {
    for(var i = 0; i < this.allAsteroids.length; i++) {
      this.allAsteroids[i].isCollidedWith(this)
      this.allAsteroids[i].move();
    };
  };

})();
