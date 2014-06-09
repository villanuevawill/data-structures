var Graph = function(){
  this._storage = {};
  this._length = 0;
  this._first = 0;
};

var Node = function(value){
  this._value = value;
  this._edges = {};
};

Graph.prototype.addNode = function(newNode, toNode){
  var currentNode = new Node(newNode);
  if (this._length === 0) {
    this._first = currentNode;
    this._storage[newNode] = currentNode;
    this._length++
  }else if (this._length === 1) {
    this._storage[newNode] = currentNode;
    currentNode._edges[this._first._value] = this._first;
    this._first._edges[newNode] = currentNode;
    this._length++
  } else {
    this._storage[newNode] = currentNode;
    currentNode._edges[toNode] = this._storage[toNode];
    this._storage[toNode]._edges[newNode] = currentNode;
  }
};

Graph.prototype.contains = function(node){
  return !!this._storage[node];
};

Graph.prototype.removeNode = function(node){
  for (key in this._storage[node]._edges){
    if (!Object.keys(this._storage[key].edges).length){
      delete this._storage[key];
    }
    delete this._storage[key]._edges[node];
  }
  delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if (this._storage[fromNode]._edges[toNode] && 
      this._storage[toNode]._edges[fromNode]){
    return true;
  }else{
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this._storage[fromNode]._edges[toNode] = this._storage[toNode];
  this._storage[toNode]._edges[fromNode] = this._storage[fromNode];


};

Graph.prototype.removeEdge = function(fromNode, toNode){
  console.log(fromNode);
  console.log(toNode);
  delete this._storage[fromNode]._edges[toNode];
  delete this._storage[toNode]._edges[fromNode];
  if (Object.keys(this._storage[fromNode]._edges).length === 0){
    delete this._storage[fromNode];
  }
  if (Object.keys(this._storage[toNode]._edges).length === 0){
    delete this._storage[toNode];
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
