var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {};
  stack._length = 0;
  stack._storage = {};
  extend(stack, stackMethods);
  return stack;
};


var stackMethods = {};

stackMethods.push = function(value){
  this._storage[this._length] = value;
  this._length++;
};

stackMethods.pop = function(){
  if (this._length>0){
    this._length--;
    var temp = this._storage[this._length];
    delete this._storage[this._length];
    return temp;
  }
};

stackMethods.size = function(){
  return this._length;
};
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};
