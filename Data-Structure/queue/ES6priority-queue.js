class PriorityQueue     {
    constructor()   {
        this.items = []
    }

    isEmpty()   {
        return this.items.length === 0;
    }

    enqueue(element)    {
        if (this.isEmpty()) {
            this.items.push(element)
        } else {
            let added = false;
            for (let i = 0; i < this.items.length; i++) {
                if (element[1] < this.items[i][1]) {
                    this.items.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(element);
            }
        }
    }

    dequeue()   {
        let value = this.items.shift();
        return value;
    }

    print() {
        console.log(this.items);
    }
}

let myQueue = new PriorityQueue();

myQueue.enqueue(["John", 2]);
myQueue.enqueue(["Jack", 1])
myQueue.enqueue(["McFadden", 1]);
myQueue.enqueue(["Biden", 3]);
myQueue.enqueue(["Epitectus", 4]);
myQueue.enqueue(["Gerard", 3]);
//myQueue.print();
 console.log(myQueue.dequeue());
console.log(myQueue.dequeue()); 
myQueue.print();