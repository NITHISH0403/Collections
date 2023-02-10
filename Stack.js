class Node{
    constructor(value){
        this.value = value;
        this.next= null;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.top = -1;
    }

    push(value){
        let node = new Node(value);
        let current;
        if(this.top == -1 && this.head == null){
            this.head = node;
            this.top++; 
        }
        else{
            current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
            this.top++;
        }
    }

    pop(){
        let current = this.head;
        let prev;
        if(this.top < 0){
            console.log("Stack is underflow");
            return 0;
        }
        else{
            for(let i = 0; i<= this.top; i++){
                let x = current;
                current = current.next;
            }
            console.log("The Popped element is :");
            console.log(x.value);
            this.top--;
        }
    }

    peek(){
        if(this.top < 0){
            console.log("Stack is underflow");
            return 0;
        }
        else{
            let current = this.head;
            for(let i = 0; i<=this.top; i++){
                let x = current;
                //change the current value
                current = current.next;
            }
            console.log("Top element is:");
            console.log(x.value);
        }
    }

    print(){
        let current = this.head;
        let str = "";
        for(let i = 0; i<=this.top; i++){
            str += current.value + " ";
            current = current.next;
        }
        console.log(str);
    }
}

var s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.print();
s.pop();
s.print();
s.peek();
s.print();
