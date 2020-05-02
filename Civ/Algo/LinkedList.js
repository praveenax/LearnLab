class LinkedListNode{
    constructor(data){
        this.data = data
        this.next = null
    }
    
   
}


const head = new LinkedListNode(12);

// add a second node
head.next = new LinkedListNode(99);

// add a third node
head.next.next = new LinkedListNode(37);

let current = head;

while (current !== null) {
    console.log(current.data);
    current = current.next;
}