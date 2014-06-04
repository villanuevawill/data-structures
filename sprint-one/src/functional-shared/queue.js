var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.length = 0;

  extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this.length] = value;
  this.length++;
};

queueMethods.dequeue = function(){
  if (this.length > 0) {
    this.length--;
    var temp = this[0];
    delete this[this[0]];
    for (var i = 1; i <= this.length; i++) {
      this[i-1] = this[i];
    }
    delete this[this.length];
    return temp;
  }


};

queueMethods.size = function(){
  return this.length;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};



