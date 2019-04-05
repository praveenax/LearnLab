class Tree {

}

class Node {


    constructor(val, id) {
        this.value = val;
        this.id = id;
    }

    addLeftNode(node) {
        this.leftNode = node;
    }

    addRightNode(node) {
        this.rightNode = node;
    }
}

var n = new Node(1, 1);
var n2 = new Node(1, 1);
var n3 = new Node(1, 1);

//console.log(n);
n.addLeftNode(n2);
n.addRightNode(n3);

console.log(n);
