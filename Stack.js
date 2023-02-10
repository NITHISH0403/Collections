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
        var node = new Node(value);
        var current;
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
        var current = this.head;
        var prev;
        if(this.top < 0){
            console.log("Stack is underflow");
            return 0;
        }
        else{
            for(var i = 0; i<= this.top; i++){
                var x = current;
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
            var current = this.head;
            for(var i = 0; i<=this.top; i++){
                var x = current;
                //change the current value
                current = current.next;
            }
            console.log("Top element is:");
            console.log(x.value);
        }
    }

    print(){
        var current = this.head;
        var str = "";
        for(var i = 0; i<=this.top; i++){
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