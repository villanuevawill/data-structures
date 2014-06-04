var makeStack = function(){
  var someInstance = {};
  var length = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[length]=value;
    length++;

  };

  someInstance.pop = function(){
    if (length >0){
      length--;
      var temp = storage[length];
      delete storage[length];
      return temp;
    }
  };

  someInstance.size = function(){
    return length;
  };

  return someInstance;
};
