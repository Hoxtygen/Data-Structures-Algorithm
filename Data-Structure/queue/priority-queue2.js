 function PriorityQueue() {
    let items = [];
    this.isEmpty  = function () {
        return items.length === 0;
    }

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            items.push(element)
        } else {
            let added = false;
            for (let i = 0; i < items.length; i++) {
                if (element[1] < items[i][1]) {
                    items.splice(i, 0, element)
                    added = true;
                    break;
                };
            }
            //if the priority we are adding is greater than any priority already added, or if the queue is empty, 
            //we simply add to the end of the queue
             if(!added)  {
                items.push(element);
            }    
        }
    };

    this.print = function () {
        console.log(items);
    };

    this.dequeue = function () {
        let value = items.shift();
        return value;
    }
} 

 let myQueue = new PriorityQueue();

myQueue.enqueue(["Antonio", 2]);
myQueue.enqueue(["Marillo", 1])
myQueue.enqueue(["Deeney", 1]);
myQueue.enqueue(["Joe", 3]);
myQueue.enqueue(["Farah", 4]);
myQueue.enqueue(["Gerard", 3]);
//myQueue.print();
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.print(); 