var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {};
  stack.length = 0;
  extend(stack, stackMethods);
  return stack;
};


var stackMethods = {};

stackMethods.push = function(value){
  this[this.length] = value;
  this.length++;
};

stackMethods.pop = function(){
  if (this.length>0){
    this.length--;
    var temp = this[this.length];
    delete this[this.length];
    return temp;
  }
};

stackMethods.size = function(){
  return this.length;
};
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};
