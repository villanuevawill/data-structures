var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;

};

makeBinarySearchTree.prototype.insert = function(value){

};

makeBinarySearchTree.prototype.contains = function(target){

};

makeBinarySearchTree.prototype.depthFirstLog = function(callback){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
