var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var tuplet = [k,v];
  var bucket = this._storage.get(i);
  if (bucket === undefined){
    this._storage.set(i,[tuplet]);
  } else {
    var matched = false;
    for (var j = 0; j<bucket.length; j++){
      if (this._storage.matches(bucket[j], k)){
        bucket[j][1] = v;
        matched = true;
        break;
      }
    }
    if (matched){
    } else {
      bucket.push(tuplet);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined){ //if the array index is empty
    return null;
  } else {
    for (var j = 0; j < bucket.length; j++) {
      if (this._storage.matches(bucket[j], k)){
        return bucket[j][1];
      }
    }
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if (bucket === undefined){ //if the array index is empty
    return null;
  } else {
    for (var j = 0; j < bucket.length; j++) {
      if (this._storage.matches(bucket[j], k)){
        bucket[j] = undefined;
      }
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */



