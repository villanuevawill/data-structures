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
  if (this._length === 0) {
    this._first = new Node(newNode);
    this._storage[newNode] = [this._first];
  } else if (this._length === 1) {
    if (this._storage[newNode]) {
      this._storage[newNode].push(new Node(newNode));
    } else {
      this._storage[newNode] = [new Node(newNode)];
    }
  }
};

Graph.prototype.contains = function(node){
  return !!this._storage[node];
};

Graph.prototype.removeNode = function(node){
  delete this._storage[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){

};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
