var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue._storage = {};
  queue._length = 0;

  extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._storage[this._length] = value;
  this._length++;
};

queueMethods.dequeue = function(){
  if (this._length > 0) {
    this._length--;
    var temp = this._storage[0];
    for (var i = 0; i <= this._length; i++) {
      this._storage[i] = this._storage[i+1];
    }
    delete this._storage[this._length];
    return temp;
  }


};

queueMethods.size = function(){
  return this._length;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



