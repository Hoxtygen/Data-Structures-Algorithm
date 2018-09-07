class Queue     {
    constructor()   {
        this.items = [];
    }
    enqueue(element)    {
        this.items.push(element)
    }

    dequeue()   {
        this.items.shift();
    }

    front() {
        return this.items[0];
    }

    size()  {
        return this.items.length;
    }

    isEmpty()   {
        return this.items.length === 0
    }

    print() {
        console.log(this.items.toString());
    }
}

let queue = new Queue();

queue.enqueue("Camilla");
queue.enqueue("Filibuster");
queue.enqueue("Eleganza");
queue.print()
console.log(queue.front());
console.log(queue.size());

