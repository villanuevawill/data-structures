var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var matches = function(tuplet, key){
    return tuplet[0] === key ? true : false;
  };
  var tuplet = [k,v];
  var bucket = this._storage.get(i);
  if (bucket === undefined){
    this._storage.set(i,tuplet);
  }else if (typeof bucket[0] === 'string'){
    if (matches(bucket,k){
      this._storage.set(i,tuplet)
    }else{
      var temp = bucket;
    }
  }

  //} else if (typeof list[i][0] === string) { //there's 1 tuplet at the hash-index
  //  if (collision) {
  //    create an empty array
  //    put the tuplet that was already there into the array
  //    put the new tuplet into the array
  //  } else { //they were the same key
  //       replace the tuplet
  //     }
  //   } else if (_.isArray(list[i][0]) ) { //there is an array of tuplets at the hash-index
  //     var matches = false;
  //     //iterate through the array
  //       //if it's not a collision (matches), replace it, set matches to true, and exit the loop
  //     if matches = false, add the tuplet to the array of tuplets
  //   }
  // }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(i)){ //if the array index is empty
    return this._storage.get(i)[1];
  } else {
    return null;
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);

};


/*
 * Complexity: What is the time complexity of the above functions?
 */



