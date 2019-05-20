function Node(val) {
    this.val = val;
    this.next = null;
}

function SinglyLinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
}

SinglyLinkedList.prototype.push = function (value) {

    let currentNode = this.head;
    let length = this.length;

    let newNode = new Node(value);

    // Case 1: if nothing in list, create a node and set head to it
    if (!currentNode) {
        this.head = newNode;
        this.length++;
        this.tail = newNode;
        return this;
    }

    // Case 2: If the list is not empty 

    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    this.length++;
    this.tail = currentNode.next;
    return this;

}

SinglyLinkedList.prototype.pop = function () {

    let currentNode = this.head;

    if (!currentNode) {
        console.log('failure no node to delete');
        return;
    }

    if (currentNode.next == null) {
        let deletedNode = currentNode;
        this.head = null;
        this.tail = null;
        this.length = 0;
        return deletedNode;
    }

    while (currentNode.next.next) {
        currentNode = currentNode.next;
    }

    let deletedNode = currentNode.next;
    currentNode.next = null;
    this.tail = currentNode;
    this.length = this.length--;

    return deletedNode;
}

SinglyLinkedList.prototype.unshift = function (value) {

    let currentNode = this.head;
    let newNode = new Node(value);

    //list is empty
    if (!currentNode) {
        this.head = newNode;
        this.length++;
        this.tail = newNode;
        return this;
    }

    //List is not empty
    if (currentNode) {
        this.head = newNode;
        newNode.next = currentNode;
        this.length++;
        return this;
    }

}

SinglyLinkedList.prototype.shift = function () {

    let currentNode = this.head;

    if (!currentNode) {
        console.log('failure no node to delete');
        return;
    }

    if (currentNode.next == null) {
        let deletedNode = currentNode;
        this.head = null;
        this.tail = null;
        this.length = 0;

        return deletedNode;
    }

    if (currentNode.next) {

        let deletedNode = currentNode;
        this.head = currentNode.next;
        currentNode.next = null;
        this.length--;
        return deletedNode;

    }

}

SinglyLinkedList.prototype._get = function (index) {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
        if (counter === index) {
            //currentNode.next = null;
            return currentNode;
        }
        counter++;
        currentNode = currentNode.next;
    }
    return null;
}

SinglyLinkedList.prototype._insert = function (index, value) {
    if (index < 0 || index > this.length) {
        console.log("Index is out of range");
        return false;
    }
    let currentNode = this.head;
    if (index == 0) {
        let newNode = new Node(value);

        //list is empty
        if (!currentNode) {
            this.head = newNode;
            this.length++;
            this.tail = newNode;
            return this.length;
        }

        //List is not empty
        if (currentNode) {
            this.head = newNode;
            newNode.next = currentNode;
            this.length++;
            return this.length;
        }

    }

    const previous = this._get(index - 1);
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return this.length;
}

SinglyLinkedList.prototype.set = function (index, value) {

    if (index < 0 || index >= this.length) {
        console.log("Index is out of range");
        return false;
    }
    let currentNode = this.head;
    if (index == 0) {
        currentNode.val = value;
        return true;
        //this.val = value;
    } else if (index > 0 && index < this.length) {
        let counter = 0;
        while (currentNode) {
            if (counter == index) {
                currentNode.val = value;
                return true;
            }
            counter++;
            currentNode = currentNode.next;
        }
        return false;

    }

}
// Removing from a index of linked list
SinglyLinkedList.prototype.remove = function (index) {

    if (index < 0 || index >= this.length) {
        console.log("Index is out of range");
        return false;
    }

    let currentNode = this.head;
    // if List is empty
    if (!currentNode) {
        return 'No node to delete';
    }
    // if index is 0
    if (index == 0) {
        //list has one element and index is 0
        if (currentNode.next == null) {
            this.head = null;
            return currentNode;
            //list has more than one element and index is 0
        } else if (currentNode.next.next) {
            this.head = currentNode.next;
            currentNode.next = null;
            this.length--;
            return currentNode;

        }
        //if index is last node
    } else if (index == this.length - 1) {
        const previous = this._get(index - 1);
        const currentNode = this._get(index);
        previous.next = null;
        this.length--;
        this.tail = previous;
        return currentNode;
        //if index is between first and last node
    } else if (index > 0 && index < (this.length - 1)) {

        const previous = this._get(index - 1);
        const currentNode = this._get(index);
        previous.next = currentNode.next;
        currentNode.next = null;
        this.length--;
        return currentNode;

    }

}
//Reversing the linked list
SinglyLinkedList.prototype.reverse = function () {

    let previousNode = null;
    let currentNode = this.head;
    let followingNode = this.head;
    this.tail = this.head;

    while (currentNode !== null) {
        followingNode = followingNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = followingNode;
    }
    this.head = previousNode;
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
//console.log(list.remove(3));
list.reverse();
console.log(list._get(0));

