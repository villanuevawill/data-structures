var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var length = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[length] = value;
    length++;
    return length;
  };

  someInstance.dequeue = function(){
    if (length > 0) {
      var temp = storage[0];
      length--;
      delete storage[0];
      //resequence keys to go from 0...n in numeric order
      for (var i = 1; i <= length; i++) {
        storage[i-1] = storage[i];
      }
      return temp;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
