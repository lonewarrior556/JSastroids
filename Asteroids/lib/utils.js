(function () {

  if (typeof Asteroids === "undefined"){
    window.Asteroids = {};
  }

  var Util = Asteroids.Util = function(){};


  Asteroids.Util.inherits = function(ChildClass, ParentClass){
      var Surrogate = function(){};
      Surrogate.prototype = ParentClass.prototype;
      ChildClass.prototype = new Surrogate();
    };

  Asteroids.Util.randomVec = function(length){
      var b = Math.random()*length * [-1,1][Math.random()*2|0];

      var a = Math.pow(Math.pow(length,2) - Math.pow(b,2), .5 );
      a = a*[-1,1][Math.random()*2|0];

      return [a,b];
    }

  Asteroids.Util.distanceFrom = function (pos1, pos2) {
    var x = pos1[0] - pos2[0];
    var y = pos1[1] - pos2[1];
    return Math.pow( Math.pow(x,2) + Math.pow(y,2), 0.5 )
  }


})();
