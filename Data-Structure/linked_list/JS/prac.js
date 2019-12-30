function Node(element) {
    this.element = element;
    this.next = null;
}

function LinkedList() {
    let head = null;
    let length = 0;
    //this.add = add;
    //this.display = display;
    //this.size = size;

    //methods
    this.add = function(element) {
        let newNode = new Node(element)
        if (head === null) {
            head = newNode;
        } else {
            let currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
        length++;
    }
    
    this.size = function() {
        console.log(length)
    }

}




/* function display() {
    let currentNode = this.head;
    while (!(currentNode !== null)) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next;
    }
} */

let list = new LinkedList()
list.add("atomic");
list.add("elementary");
list.add("pharmaceuticals");
list.size();
list.display()

function addAt(newElement, item) {
    let ShaolinNode = new Node(newElement);
}