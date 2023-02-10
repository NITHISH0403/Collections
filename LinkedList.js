// create a node in user defined class node
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//first initial tha empty linkedlist
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    //add the element
    add(value){
        let node = new Node(value);
        let current;
        
        //head is null when create a node and store the value.
        if(this.head == null){
        this.head = node;
        }
        else{
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    insert(value,index){
        let node = new Node(value);
        let current, prev;
        if(index == 0){
            current = node ;
            current.next = this.head;
            this.head = current;
        }
        else if(index > 0){
            current = this.head;
            for(let i=0; i<index; i++){
                prev = current;
                current = current.next;
            }
            node.next = current;
            prev.next = node;
        }
        this.size++;
    }
    remove(index){
        let current = this.head;
        let prev;
        if(index == 0){
            this.head = current.next;
        } 
        else if(index > 0){
            for(let i=0; i<index; i++){
                prev = current;
                current = current.next;
            }
            prev.next = current.next;
        }
        this.size--;
    }
    printList(){
        let current = this.head;
        let str = "";
        while(current){
            str += current.value + " ";
            current = current.next;
        }
        console.log(str);
    }
    
}
let list = new LinkedList();
list.add(10);
list.add(20);
list.add(30);
list.printList();
list.insert(15,0);
list.insert(25,4);
list.printList();
list.remove(2);
list.printList();
