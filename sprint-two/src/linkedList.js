var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // list[list.tail] = value;
    // list.tail = value; 
    var node = makeNode(value);
    if (list.head === null){
      list.head = node;
    }else{
      list.tail.next = node.value;
    }
    list[value] = node;
    list.tail = node;
  };

  list.removeHead = function(){
    if (list.head === list.tail){
      list.head = null;
    }


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

var node1 =  makeNode(4);
var list1 = makeLinkedList();
list1.addToTail(node1);

 //{value: 4, next: null}

/*
 * Complexity: What is the time complexity of the above functions?
 */
