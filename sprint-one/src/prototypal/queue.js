var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var queue = Object.create(queueMethods);
queue._storage = {};
queue._first = 0;
queue._last = 0;
queue._length = 0;

return queue;

};

var queueMethods = {
  enqueue: function(value){
    this._length++;
    if(this._length === 1){
      this._last = this._first;
    } else {
      this._last++;
    }
    this._storage[this._last] = value;
  },
  dequeue: function(){
    if(this._length > 0){
      this._length--;
      var temp = this._storage[this._first];
      delete this._storage[this._first];
      this._first++;
      return temp;
    }
  },
  size: function(){
    return this._length;
  }
};


