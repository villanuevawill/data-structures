var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._length = 0;
  this._storage = {};
  this._first = 0;
  this._last = 0;

};

Queue.prototype.enqueue = function(value){
  this._length++;
  if (this._length === 1){
    this._last = this._first;
  }else{
    this._last++;
  }
  this._storage[this._last] = value;
};

Queue.prototype.dequeue = function(){
  if (this._length > 0){
    this._length--;
    var temp = this._storage[this._first];
    delete this._storage[this._first];
    this._first++;
    return temp;
  }
};

Queue.prototype.size = function(){
  return this._length;
};





var queue = new Queue();
