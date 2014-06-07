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
  if (this.value === target) {
    return true;
  }

  if (target < this.value){
    if (this.left && this.left.contains(target)){
      return true;
    }
  }else if (target > this.value){
    if (this.right && this.right.contains(target)){
      return true;
    }
  }
  return false;
};

makeBinarySearchTree.prototype.depthFirstLog = function(callback){
  callback(this.value);
  if (this.left){
    this.left.depthFirstLog(callback);
  }
  if (this.right){
    this.right.depthFirstLog(callback);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
