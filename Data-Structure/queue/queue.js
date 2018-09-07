function Queue() {
    let items = [];
    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        items.shift();
    };
    this.front = function () {
        return items[0];
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
    this.size = function () {
        return items.length;
    }
    this.print = function () {
        console.log(items.toString());
        
    };
}

let queue = new Queue();

queue.enqueue(12);
queue.enqueue(20);
queue.enqueue(1);
queue.print();
queue.dequeue()
console.log(queue.size());
console.log(queue.isEmpty());
queue.enqueue("Nordstrom");
queue.enqueue("Alligator");
queue.enqueue("Nostradamus");
queue.print();