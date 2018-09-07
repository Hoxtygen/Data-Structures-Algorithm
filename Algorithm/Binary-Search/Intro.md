# Binary search is an algorithm; its input is a sorted list of elements. If an element you’re looking for is in that list, binary search returns the position where it’s located. Otherwise, binary search returns null.

# In general, for any list of n, binary search will take log2n steps to run in the worst case

# Running Time Of An Algorithm
# This is the time it takes an algorithm to complete a given operation.
# So the maximum number of guesses is the same as the size of the list. This is called linear time.

#Binary search is diferent. If the list is 100 items long, it takes at most 7 guesses. If the list is 4 billion items, it takes at most 32 guesses. Powerful, eh? Binary search runs in logarithmic time (or log time, as the natives call it).

# Big O notation is special notation that tells you how fast an algorithm is. For example, suppose you have a list of size n. Simple search needs to check each element, so it will take n operations. The run time in Big O notation is O(n). Where are the seconds? There are none—Big O doesn’t tell you the speed in seconds. Big O notation lets you compare the number of operations. It tells you how fast the algorithm grows

#Algorithm running time grow at different rate

# As the number of items increases, binary search takes a little more time to run. But simple search takes a lot more time to run. So as the list of numbers gets bigger, binary search suddenly becomes a lot faster than simple search.

# it’s not enough to know how long an algorithm takes to run—you need to know how the running time increases as the list size increases. That’s where Big O notation comes in.

# Some common Big O run times
Here are ive Big O run times that you’ll encounter a lot, sorted from fastest to slowest:

• O(log n), also known as log time. Example: Binary search.
• O(n), also known as linear time. Example: Simple search.
• O(n * log n). Example: A fast sorting algorithm, like quicksort
(coming up in chapter 4).
• O(n2). Example: A slow sorting algorithm, like selection sort
(coming up in chapter 2).
• O(n!). Example: A really slow algorithm, like the traveling
salesperson (coming up next!).


Algorithm speed isn’t measured in seconds, but in growth of the
number of operations.
• Instead, we talk about how quickly the run time of an algorithm
increases as the size of the input increases.
• Run time of algorithms is expressed in Big O notation.
• O(log n) is faster than O(n), but it gets a lot faster as the list of items
you’re searching grows.