var makeBinarySearchTree = function(value){
  var tree = Object.create(makeBinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;

};

makeBinarySearchTree.prototype.insert = function(value){
  if (value < this.value){
    if (this.left){
      this.left.insert(value);
    }else {
      this.left = makeBinarySearchTree(value);
    }
  }else if (value > this.value){
    if (this.right){
      this.right.insert(value);
    }else {
      this.right = makeBinarySearchTree(value);
    }
  }
};

makeBinarySearchTree.prototype.contains = function(target){

};

makeBinarySearchTree.prototype.depthFirstLog = function(callback){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
