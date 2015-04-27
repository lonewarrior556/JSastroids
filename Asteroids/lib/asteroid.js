(function () {

  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  };

  var DEFAULTCOLOR = "red";
  var DEFAULTRADIUS = 30;
  var DEFAULTSPEED = 10;


  var Asteroid = Asteroids.Asteroid = function (pos) {
    Asteroids.movingObject.call(this, pos, Asteroids.Util.randomVec(10), 30, "red");
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.movingObject);



})();
