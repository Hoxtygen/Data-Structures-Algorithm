function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element,priority) {
        let queueElement = new QueueElement(element, priority);
        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                //starting from index i, remove 0 element and insert queueElement
                items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        //if the priority we are adding is greater than any priority already added, or if the queue is empty, 
        //we simply add to the end of the queue
        if (!added) {
            items.push(queueElement);
        }
    };

    this.print = function () {
        for (let i = 0; i < items.length; i++) {
            console.log(`${items[i].element} - ${items[i].priority}`); 
        }
    };

    this.dequeue = function () {
        let value = items.shift();
        return value;
    }
}



let priorityqueue = new PriorityQueue();
priorityqueue.enqueue("John", 2);
priorityqueue.enqueue("Jack", 1)
priorityqueue.enqueue("McFadden", 1);
priorityqueue.enqueue("Biden", 3);
priorityqueue.enqueue("Epitectus", 4);
priorityqueue.print();
console.log("---------------");

priorityqueue.dequeue();
priorityqueue.dequeue();
priorityqueue.dequeue();
priorityqueue.print();
