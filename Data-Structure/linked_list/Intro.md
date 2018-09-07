#1 Store a sequential list of elements, however, unlike array, the elements are not placed contiguously in memory.

#2 Each element consists of a node that stores the element itself and also a reference(called a link or pointer) that points to the next element. Pointers are used when working with linked list

#3 Linked list elements are referenced by their relationship to other elements of the linked list. Compare to array which are referenced by position. For example, we say Mary follows Maggie, not that Maggie is in the fifth position

#4 When adding or removing element form a linked list, there's no need to shift elements like in conventional array.

#5 Unlike in array where we can access any element at any position; with linked list, to access an element from the middle, we need to start from the beginning(head) and iterate the list until the desired element is foun.