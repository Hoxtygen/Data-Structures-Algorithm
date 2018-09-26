function LinkedList() {

    //A helper class that represents the element we want to add to the list
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }

    //Stores number of items in the list
    let length = 0;
    //first element in the list
    let head = null;

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.append = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
           let currentNode = head;

           //loop through the list until the last item
           while (currentNode.next) {
               currentNode = currentNode.next;
           }
           //get last item and assign next to node to make the link
        currentNode.next = node;
        }
        length++;   
    };

    this.remove = function (element) {
        let currentNode = head;
        let previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.indexOf = function (element) {
        let currentNode = head;
        let index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };

    this.elementAt = function (index) {
        let currentNode = head;
        let count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        let node = new Node();
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index > length) {
            return false;
        }
        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++
    };

    this.removeAt = function (index) {
        let currentNode = head;
        let previousNode;
        let currentIndex = 0;

        if (index < 0 || index >= length) {
            return null
        }

        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
        return currentNode.element;
    }
}

let list = new LinkedList();
list.append(23);
list.append(40);

console.log(list.isEmpty());
console.log(list.elementAt(0));
console.log(list.size());
console.log(list.head());

