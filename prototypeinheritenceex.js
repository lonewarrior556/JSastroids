



// dog.inherits(animal)

Function.prototype.inherits = function(SuperClass){
  var Surrogate = function(){}
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();
}


var Animal = function (name) {
	this.name = name;
};

Animal.prototype.breathe = function () {
	return "breathing";
};

var Dog = function (color) {
  this.color = color;
};

  Dog.inherits(Animal);

Dog.prototype.bark = function() {
  return "woof!";
};
