var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(node){
    // list[list.tail] = value;
    // list.tail = value;


  };

  list.removeHead = function(){
  };

  list.contains = function(target){
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var node1 =  makeNode(4); //{value: 4, next: null}

/*
 * Complexity: What is the time complexity of the above functions?
 */
