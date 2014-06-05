var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._length = 0;
};

Stack.prototype.push = function(value){
  this._storage[this._length] = value;
  this._length++;
};
Stack.prototype.pop = function(){
  if (this._length > 0) {
    this._length--;
    var temp = this._storage[this._length];
    delete this._storage[this._length];
    return temp;
  }
};
Stack.prototype.size = function(){
  return this._length;
};


var stack = new Stack();

