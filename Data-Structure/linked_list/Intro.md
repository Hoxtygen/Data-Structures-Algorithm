#1 Store a sequential list of elements, however, unlike array, the elements are not placed contiguously in memory.

#2 Each element consists of a node that stores the element itself and also a reference(called a link or pointer) that points to the next element. Pointers are used when working with linked list

#3 Linked list elements are referenced by their relationship to other elements of the linked list. Compare to array which are referenced by position. For example, we say Mary follows Maggie, not that Maggie is in the fifth position

#4 When adding or removing element form a linked list, there's no need to shift elements like in conventional array.

#5 Unlike in array where we can access any element at any position; with linked list, to access an element from the middle, we need to start from the beginning(head) and iterate the list until the desired element is found.

#Linked list methods

#1 append(element): This adds a new item to the end of the list.insert(position, element): This inserts a new item at a specified position in the list.

#2 remove(element): This removes an item from the list.

#3 indexOf(element): This returns the index of the element in the list. If the element is not in the list, it returns -1.

#4 removeAt(position): This removes an item from a specified position in the list.

#5 isEmpty(): This returns true if the linked list does not contain any elements and false if the size of the linked list is bigger than 0.

#6 size(): This returns the number of elements the linked list contains. It is similar to the length property of the array.

#7 toString(): As the list uses a Node class as an item, we need to overwrite the default toString method inherited from the JavaScript object to output only the element values