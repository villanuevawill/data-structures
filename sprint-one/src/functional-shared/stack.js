var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var stack = {};
  var stackMethods = {};
  var length = 0;

  stackMethods.push = function(){

  };

  stackMethods.pop = function(){

  };

  stackMethods.size = function(){

  };
  var extend = function(to, from){
    for (var key in from){
      to[key] = from[key];
    }
  };
  extend(stack, stackMethods);

  return stack;
};
