var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null) { //if no items in the list yet
      list.head = newNode;
    } else {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function(){
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  list.contains = function(target){
    var node = list.head;
    while (node) {
      if (node.value === target) {//if node.value = target, set found= true;
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


var someList = makeLinkedList();
someList.addToTail(4);
someList.addToTail(6);
someList.removeHead();
someList.contains(6);






/*
 * Complexity: What is the time complexity of the above functions?
 */
