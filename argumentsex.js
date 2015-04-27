var sum = function(){
  var argArray = Array.prototype.slice.call(arguments);
  return argArray.reduce( function(total, num){ return total + num }, 0);
};
//
// console.log(sum(4,5,8,1));

Function.prototype.myBind = function(obj) {
  var argArray = Array.prototype.slice.call(arguments)
  argArray.shift()
  var fn = this;
  return function () {
    return fn.apply(obj, argArray);
  };
}


var Person = function ( name) {
  this.name = name;

};

Person.prototype.sayHi = function(){
  console.log("im "+ this.name);
  var args = Array.prototype.slice.call(arguments)
  console.log("and my arguments are "+ args);
};


var curriedSum = function (n) {
  var numbers = [];
  var _curriedSum = function (num) {
    var argArray = Array.prototype.slice.call(arguments);
    numbers = numbers.concat(argArray);
    if (numbers.length === n) {
      return numbers.reduce( function(total, num){ return total + num }, 0);
    } else {
      return _curriedSum;
    };
  };
  return _curriedSum;
};



Function.prototype.curried = function (n) {
  var numbers = [];
  that = this
  var _curriedSum = function (num) {
    var argArray = Array.prototype.slice.call(arguments);
    numbers = numbers.concat(argArray);
    if (numbers.length === n) {
      return that.apply(null,numbers);
    } else {
      return _curriedSum;
    };
  };
  return _curriedSum;
};

console.log(sum.curried(4)(1,2)(2)(2))
