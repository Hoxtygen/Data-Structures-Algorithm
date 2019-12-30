//Create a Node class
function Node(element) {
    this.element = element;
    this.next = null;
}

//Create a LinkedList class

function LinkedList() {
    this.head =new Node("head");
    this.find = find;
    this.insert = insert;
    //this.remove = remove;
    this.display = display;
    this.add = add;
}

function find(item) {
    //let currNode = new Node();
    let currNode = this.head;
    while (currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    let newNode = new Node(newElement)
    let currentNode = this.find(item)
    newNode.next = currentNode.next;
    currentNode.next = newNode;
}

function display() {
    let currentNode = this.head;
    while (!(currentNode === null)) {
        console.log((currentNode.next.element));
        currentNode = currentNode.next;
    }
}


//Testing the progam

 let cities = new LinkedList();
cities.insert("Conway", "head");
cities.insert("Holloway", "Conway");
cities.insert("McGovern", "Holloway");
cities.display(); 