# Queue work on the FIFO principle
# The addition of item is at the tail, but the removal of item is from the head or front
# Real life examples includes lines in banking,restaurant, grocery stores..etc and print jobs sent to the printer for printing

# Queue Methods

#1 enqueue(element(s)): This adds a new item (or several items) at the back of the queue.

#2 dequeue(): This removes the first item from the queue (the item that is in the front of the queue). It also returns the removed element.

#3 front(): This returns the first element from the queue, the first one added, and the first one that will be removed from the queue. The queue is not modified (it does not remove the element; it only returns the element for information purposes-very similar to the peek method from the Stack class).

#4 isEmpty(): This returns true if the queue does not contain any elements, and false if the queue is bigger than 0.

#5 size(): This returns the number of elements the queue contains. It is similar to the length property of the array.