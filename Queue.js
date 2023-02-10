class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(value){
        let node = new Node(value);
        let current;
        if(this.head == null){
            this.head= node;
        }
        else{
            current = this.head;
            while(current.next != null){
                current = current.next;
        }    
        if(current.next==null)
            current.next =node;
        }
        this.size++;
    }
    remove(){
        let current = this.head;

        this.head = current.next;
        console.log("The remove value is:");
        console.log(current.value)
    }

    print(){
        let current = this.head;
        let str ="";
        if(current == null){
            console.log("Queue is empty!")
        }
        else{
            while(current != null ){
                str += current.value + " ";
                current = current.next;    
            }    
            console.log(str);
        }
    }
}
let list=new Queue();
list.add(10);
list.add(20);
list.add(30);
list.print();
list.remove();
list.print();
list.remove();
list.print();
