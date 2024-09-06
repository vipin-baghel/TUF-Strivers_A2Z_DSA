# DSA Algorithm Revisions

This guide is designed to help you revise and remember key data structures and algorithms.

## Table of Contents
1. **[Arrays](#arrays)**
2. **[Strings](#strings)**
3. **[Linked Lists](#linked-lists)**
4. **[Stacks](#stacks)**
5. **[Queues](#queues)**
6. **[Trees](#trees)**
7. **[Binary Search Trees](#binary-search-trees)**
8. **[Graphs](#graphs)**
9. **[Tries](#tries)**
10. **[Heaps](#heaps)**
11. **[Hash Tables](#hash-tables)**
12. **[Recursion](#recursion)**
13. **[Backtracking](#backtracking)**
14. **[Dynamic Programming](#dynamic-programming)**
15. **[Greedy Algorithms](#greedy-algorithms)**
16. **[Sorting and Searching](#sorting-and-searching)**
17. **[Pattern Searching](#pattern-searching)**
18. **[Divide and Conquer](#divide-and-conquer)**
19. **[Number Theory](#number-theory)**
20. **[Bit Manipulation](#bit-manipulation)**
## Arrays
- **Definition**: An array is a collection of items stored at contiguous memory locations.
- **Key Topics**:
  - **Dynamic and Static Arrays**: Understanding the difference between arrays that can change size and those that cannot.
    ```pseudo
    Initialize array of fixed size
    If dynamic array:
        Resize array when needed
    ```
  - **Traversing an Array**: Techniques for iterating through array elements.
    ```pseudo
    for i from 0 to length of array - 1:
        print(array[i])
    ```
  - **Subarrays**: Working with contiguous parts of an array.
    ```pseudo
    for i from 0 to length of array - 1:
        for j from i to length of array - 1:
            print subarray from i to j
    ```
  - **Multi-Dimensional Arrays**: Arrays with more than one dimension, like matrices.
    ```pseudo
    for i from 0 to number of rows - 1:
        for j from 0 to number of columns - 1:
            print(matrix[i][j])
    ```
- **Practice Problems**:
  - Kadane’s Algorithm: Find the maximum sum of a contiguous subarray.
    ```pseudo
    Initialize max_so_far to -infinity
    Initialize max_ending_here to 0
    for each element in array:
        max_ending_here = max_ending_here + element
        if max_so_far < max_ending_here:
            max_so_far = max_ending_here
        if max_ending_here < 0:
            max_ending_here = 0
    return max_so_far
    ```
  - Merge Overlapping Intervals: Merge all overlapping intervals.
    ```pseudo
    Sort intervals based on start time
    Initialize merged_intervals as empty list
    for each interval in intervals:
        if merged_intervals is empty or last interval in merged_intervals does not overlap with current interval:
            add current interval to merged_intervals
        else:
            merge current interval with last interval in merged_intervals
    return merged_intervals
    ```
  - Rotate Matrix: Rotate a matrix by 90 degrees without using extra space.
    ```pseudo
    Transpose the matrix
    Reverse each row of the matrix
    ```

## Strings
- **Definition**: Strings are arrays of characters terminated with a special character `\0`.
- **Key Topics**:
  - **Mutable and Immutable Strings**: Differences between strings that can and cannot be changed.
    ```pseudo
    Immutable string:
        Create new string for any modification
    Mutable string:
        Modify string in place
    ```
  - **Substrings**: Extracting parts of a string.
    ```pseudo
    for i from 0 to length of string - 1:
        for j from i to length of string - 1:
            print substring from i to j
    ```
  - **Pattern Searching**: Algorithms to find patterns within strings.
    ```pseudo
    for i from 0 to length of text - length of pattern:
        for j from 0 to length of pattern:
            if text[i + j] != pattern[j]:
                break
        if j == length of pattern:
            print "Pattern found at index", i
    ```
- **Practice Problems**:
  - Palindromic Substrings: Count all palindromic substrings in a given string.
    ```pseudo
    Initialize count to 0
    for i from 0 to length of string - 1:
        expand around center i for odd length palindromes
        expand around center i and i+1 for even length palindromes
    return count
    ```

## Linked Lists
- **Definition**: A linked list is a linear data structure where each element is a separate object.
- **Key Topics**:
  - **Singly Linked List**: Each node points to the next node.
    ```pseudo
    class Node:
        data
        next

    class SinglyLinkedList:
        head
        add_node(data):
            create new node with data
            if head is null:
                head = new node
            else:
                traverse to end of list
                add new node at end
        remove_node(data):
            find node with data
            remove node from list
    ```
  - **Doubly Linked List**: Each node points to both the next and previous nodes.
    ```pseudo
    class Node:
        data
        next
        prev

    class DoublyLinkedList:
        head
        add_node(data):
            create new node with data
            if head is null:
                head = new node
            else:
                traverse to end of list
                add new node at end
        remove_node(data):
            find node with data
            remove node from list
    ```
  - **Circular Linked List**: The last node points back to the first node.
    ```pseudo
    class Node:
        data
        next

    class CircularLinkedList:
        head
        add_node(data):
            create new node with data
            if head is null:
                head = new node
                head.next = head
            else:
                traverse to end of list
                add new node at end
                new node.next = head
        remove_node(data):
            find node with data
            remove node from list
    ```
- **Practice Problems**:
  - Reverse a Linked List: Reverse the nodes of a linked list.
    ```pseudo
    Initialize prev to null
    Initialize current to head
    while current is not null:
        next = current.next
        current.next = prev
        prev = current
        current = next
    head = prev
    ```

## Stacks
- **Definition**: A stack is a linear data structure that follows the LIFO (Last In First Out) principle.
- **Key Topics**:
  - **Stack Operations**: Push, pop, peek, and check if the stack is empty.
    ```pseudo
    class Stack:
        items
        push(item):
            add item to top of stack
        pop():
            remove and return item from top of stack
        peek():
            return item from top of stack without removing
        is_empty():
            return true if stack is empty, else false
    ```
  - **Applications of Stack**: Use cases like expression evaluation and backtracking.
    ```pseudo
    Evaluate postfix expression:
        for each token in expression:
            if token is operand:
                push token to stack
            else if token is operator:
                operand2 = pop from stack
                operand1 = pop from stack
                result = apply operator to operand1 and operand2
                push result to stack
        return pop from stack
    ```
- **Practice Problems**:
  - Balanced Parentheses: Check if an expression has balanced parentheses.
    ```pseudo
    Initialize stack
    for each character in expression:
        if character is opening parenthesis:
            push to stack
        else if character is closing parenthesis:
            if stack is empty or top of stack is not matching opening parenthesis:
                return false
            pop from stack
    return stack is empty
    ```

## Queues
- **Definition**: A queue is a linear data structure that follows the FIFO (First In First Out) principle.
- **Key Topics**:
  - **Queue Operations**: Enqueue, dequeue, front, and check if the queue is empty.
    ```pseudo
    class Queue:
        items
        enqueue(item):
            add item to end of queue
        dequeue():
            remove and return item from front of queue
        front():
            return item from front of queue without removing
        is_empty():
            return true if queue is empty, else false
    ```
  - **Circular Queue**: A queue where the last position is connected back to the first position to make a circle.
    ```pseudo
    class CircularQueue:
        items
        head
        tail
        enqueue(item):
            if queue is full:
                return "Queue is full"
            else:
                add item to tail
                update tail
        dequeue():
            if queue is empty:
                return "Queue is empty"
            else:
                remove item from head
                update head
    ```
  - **Priority Queue**: A type of queue where each element is associated with a priority and elements are served based on their priority.
    ```pseudo
    class PriorityQueue:
        items
        enqueue(item, priority):
            add item based on priority
        dequeue():
            remove and return item with highest priority
    ```

- **Practice Problems**:
  - Implement Queue using Stacks: Implement a queue using two stacks.
    ```pseudo
    class QueueUsingStacks:
        stack1
        stack2
        enqueue(item):
            push item to stack1
        dequeue():
            if stack2 is empty:
                while stack1 is not empty:
                    push top of stack1 to stack2
                    pop from stack1
            return pop from stack2
    ```
  - LRU Cache: Design and implement a data structure for Least Recently Used (LRU) cache.
    ```pseudo
    class LRUCache:
        capacity
        cache
        order
        get(key):
            if key in cache:
                move key to end of order
                return cache[key]
            return -1

        put(key, value):
            if key in cache:
                move key to end of order
            else:
                if len(cache) == capacity:
                    oldest = order.pop(0)
                    del cache[oldest]
                order.append(key)
            cache[key] = value

        move(key):
            order.remove(key)
            order.append(key)
    ```


## Trees
- **Definition**: A tree is a hierarchical data structure consisting of nodes.
- **Key Topics**:
  - **Binary Tree**: Each node has at most two children.
    ```pseudo
    class Node:
        data
        left
        right

    class BinaryTree:
        root
        insert(data):
            if root is null:
                root = new Node(data)
            else:
                insert_node(root, data)

        insert_node(node, data):
            if data < node.data:
                if node.left is null:
                    node.left = new Node(data)
                else:
                    insert_node(node.left, data)
            else:
                if node.right is null:
                    node.right = new Node(data)
                else:
                    insert_node(node.right, data)
    ```
  - **Tree Traversal**: Techniques like inorder, preorder, and postorder traversal.
    ```pseudo
    Inorder Traversal(node):
        if node is not null:
            Inorder Traversal(node.left)
            print(node.data)
            Inorder Traversal(node.right)

    Preorder Traversal(node):
        if node is not null:
            print(node.data)
            Preorder Traversal(node.left)
            Preorder Traversal(node.right)

    Postorder Traversal(node):
        if node is not null:
            Postorder Traversal(node.left)
            Postorder Traversal(node.right)
            print(node.data)
    ```
- **Practice Problems**:
  - Inorder Traversal: Perform inorder traversal without recursion.
    ```pseudo
    Initialize stack
    current = root
    while current is not null or stack is not empty:
        while current is not null:
            push current to stack
            current = current.left
        current = pop from stack
        print(current.data)
        current = current.right
    ```

## Binary Search Trees
- **Definition**: A binary search tree is a binary tree with the property that all left descendants are less than the root and all right descendants are greater.
- **Key Topics**:
  - **Insertion and Deletion**: Adding and removing nodes while maintaining BST properties.
    ```pseudo
    Insert(node, data):
        if node is null:
            return new Node(data)
        if data < node.data:
            node.left = Insert(node.left, data)
        else:
            node.right = Insert(node.right, data)
        return node

    Delete(node, data):
        if node is null:
            return node
        if data < node.data:
            node.left = Delete(node.left, data)
        else if data > node.data:
            node.right = Delete(node.right, data)
        else:
            if node.left is null:
                return node.right
            else if node.right is null:
                return node.left
            temp = find_min(node.right)
            node.data = temp.data
            node.right = Delete(node.right, temp.data)
        return node

    find_min(node):
        current = node
        while current.left is not null:
            current = current.left
        return current
    ```
  - **Searching**: Finding a node in the BST.
    ```pseudo
    Search(node, data):
        if node is null or node.data == data:
            return node
        if data < node.data:
            return Search(node.left, data)
        return Search(node.right, data)
    ```
- **Practice Problems**:
  - Validate BST: Check if a binary tree is a valid BST.
    ```pseudo
    ValidateBST(node, min, max):
        if node is null:
            return true
        if node.data <= min or node.data >= max:
            return false
        return ValidateBST(node.left, min, node.data) and ValidateBST(node.right, node.data, max)
    ```

## Graphs
- **Definition**: A graph is a collection of nodes and edges.
- **Key Topics**:
  - **Graph Representation**: Adjacency matrix and adjacency list.
    ```pseudo
    Adjacency Matrix:
        Initialize matrix of size V x V with 0
        for each edge (u, v):
            matrix[u][v] = 1
            matrix[v][u] = 1

    Adjacency List:
        Initialize list of size V
        for each edge (u, v):
            add v to list[u]
            add u to list[v]
    ```
  - **Graph Traversal**: Depth-first search (DFS) and breadth-first search (BFS).
    ```pseudo
    DFS(node, visited):
        visited[node] = true
        print(node)
        for each neighbor of node:
            if not visited[neighbor]:
                DFS(neighbor, visited)

    BFS(start):
        Initialize queue
        visited[start] = true
        enqueue(start)
        while queue is not empty:
            node = dequeue()
            print(node)
            for each neighbor of node:
                if not visited[neighbor]:
                    visited[neighbor] = true
                    enqueue(neighbor)
    ```
- **Practice Problems**:
  - Detect Cycle in a Graph: Detect if there is a cycle in a graph.
    ```pseudo
    DetectCycle(node, visited, parent):
        visited[node] = true
        for each neighbor of node:
            if not visited[neighbor]:
                if DetectCycle(neighbor, visited, node):
                    return true
            elif neighbor != parent:
                return true
        return false
    ```

## Tries
- **Definition**: A trie is a special type of tree used to store associative data structures.
- **Key Topics**:
  - **Insertion and Search**: Adding and finding words in the trie.
    ```pseudo
    class TrieNode:
        children
        is_end_of_word

    class Trie:
        root
        insert(word):
            node = root
            for each character in word:
                if character not in node.children:
                    node.children[character] = new TrieNode()
                node = node.children[character]
            node.is_end_of_word = true

        search(word):
            node = root
            for each character in word:
                if character not in node.children:
                    return false
                node = node.children[character]
            return node.is_end_of_word
    ```
  - **Applications of Tries**: Use cases like autocomplete and spell checker.
    ```pseudo
    Autocomplete(prefix):
        node = root
        for each character in prefix:
            if character not in node.children:
                return []
            node = node.children[character]
        return get_all_words(node, prefix)

    get_all_words(node, prefix):
        words = []
        if node.is_end_of_word:
            words.append(prefix)
        for each character, child in node.children:
            words.extend(get_all_words(child, prefix + character))
        return words
    ```
- **Practice Problems**:
  - Implement Trie: Implement a trie with insert and search operations.
    ```pseudo
    class TrieNode:
        children
        is_end_of_word

    class Trie:
        root
        insert(word):
            node = root
            for each character in word:
                if character not in node.children:
                    node.children[character] = new TrieNode()
                node = node.children[character]
            node.is_end_of_word = true

        search(word):
            node = root
            for each character in word:
                if character not in node.children:
                    return false
                node = node.children[character]
            return node.is_end_of_word
    ```

## Heaps
- **Definition**: A heap is a special tree-based data structure that satisfies the heap property.
- **Key Topics**:
  - **Min-Heap and Max-Heap**: Min-heap has the smallest element at the root, max-heap has the largest.
    ```pseudo
    Min-Heap:
        Insert(element):
            add element to end of heap
            heapify_up()

        DeleteMin():
            replace root with last element
            heapify_down()

        heapify_up():
            while element is smaller than parent:
                swap element with parent

        heapify_down():
            while element is larger than child:
                swap element with smallest child

    Max-Heap:
        Insert(element):
            add element to end of heap
            heapify_up()

        DeleteMax():
            replace root with last element
            heapify_down()

        heapify_up():
            while element is larger than parent:
                swap element with parent

        heapify_down():
            while element is smaller than child:
                swap element with largest child
    ```
  - **Heap Operations**: Insert, delete, and heapify.
    ```pseudo
    Insert(element):
        add element to end of heap
        heapify_up()

    Delete(element):
        replace element with last element
        heapify_down()

    heapify_up():
        while element is smaller than parent:
            swap element with parent

    heapify_down():
        while element is larger than child:
            swap element with smallest child
    ```
- **Practice Problems**:
  - Heap Sort: Sort an array using heap sort.
    ```pseudo
        HeapSort(array):
        build_heap(array)
        for i from length of array - 1 to 0:
            swap array[0] with array[i]
            heapify(array, 0, i)

    build_heap(array):
        for i from length of array // 2 - 1 to 0:
            heapify(array, i, length of array)

    heapify(array, i, n):
        largest = i
        left = 2 * i + 1
        right = 2 * i + 2
        if left < n and array[left] > array[largest]:
            largest = left
        if right < n and array[right] > array[largest]:
            largest = right
        if largest != i:
            swap array[i] with array[largest]
            heapify(array, largest, n)
    ```

## Hash Tables
- **Definition**: A hash table is a data structure that maps keys to values for highly efficient lookup.
- **Key Topics**:
  - **Hash Functions**: Functions that map keys to indices in an array.
    ```pseudo
    hash_function(key):
        return key % size_of_table
    ```
  - **Collision Resolution**: Techniques like chaining and open addressing.
    ```pseudo
    Chaining:
        if hash_table[hash_function(key)] is empty:
            insert key at hash_table[hash_function(key)]
        else:
            append key to hash_table[hash_function(key)]

    Open Addressing:
        if hash_table[hash_function(key)] is empty:
            insert key at hash_table[hash_function(key)]
        else:
            find next empty slot using linear probing/quadratic probing/double hashing
    ```
- **Practice Problems**:
  - Implement HashMap: Implement a hash map with separate chaining.
    ```pseudo
    class HashMap:
        size
        table

        hash_function(key):
            return key % size

        insert(key, value):
            index = hash_function(key)
            if table[index] is empty:
                table[index] = [(key, value)]
            else:
                for pair in table[index]:
                    if pair[0] == key:
                        pair[1] = value
                        return
                table[index].append((key, value))

        get(key):
            index = hash_function(key)
            for pair in table[index]:
                if pair[0] == key:
                    return pair[1]
            return None

        remove(key):
            index = hash_function(key)
            for pair in table[index]:
                if pair[0] == key:
                    table[index].remove(pair)
                    return
    ```

## Recursion
- **Definition**: Recursion is a method where the solution to a problem depends on solutions to smaller instances of the same problem.
- **Key Topics**:
  - **Base Case and Recursive Case**: The simplest instance of the problem and the recursive step.
    ```pseudo
    function recursive_function(parameters):
        if base_case_condition:
            return base_case_value
        else:
            return recursive_function(smaller_parameters)
    ```
  - **Tail Recursion**: A form of recursion where the recursive call is the last operation.
    ```pseudo
    function tail_recursive_function(parameters, accumulator):
        if base_case_condition:
            return accumulator
        else:
            return tail_recursive_function(smaller_parameters, updated_accumulator)
    ```
- **Practice Problems**:
  - Factorial: Calculate the factorial of a number using recursion.
    ```pseudo
    function factorial(n):
        if n == 0:
            return 1
        else:
            return n * factorial(n - 1)
    ```

## Backtracking
- **Definition**: Backtracking is an algorithmic technique for solving problems recursively by trying to build a solution incrementally.
- **Key Topics**:
  - **N-Queens Problem**: Placing N queens on an N×N chessboard so that no two queens threaten each other.
    ```pseudo
    function solve_n_queens(board, row):
        if row == size of board:
            print(board)
            return true
        for col from 0 to size of board - 1:
            if is_safe(board, row, col):
                place_queen(board, row, col)
                if solve_n_queens(board, row + 1):
                    return true
                remove_queen(board, row, col)
        return false

    function is_safe(board, row, col):
        check if placing queen at (row, col) is safe
    ```
  - **Sudoku Solver**: Solving Sudoku puzzles using backtracking.
    ```pseudo
    function solve_sudoku(board):
        if no empty cell:
            return true
        find empty cell
        for num from 1 to 9:
            if is_safe(board, row, col, num):
                place_num(board, row, col, num)
                if solve_sudoku(board):
                    return true
                remove_num(board, row, col)
        return false

    function is_safe(board, row, col, num):
        check if placing num at (row, col) is safe
    ```
- **Practice Problems**:
  - N-Queens: Solve the N-Queens problem using backtracking.
    ```pseudo
    function solve_n_queens(board, row):
        if row == size of board:
            print(board)
            return true
        for col from 0 to size of board - 1:
            if is_safe(board, row, col):
                place_queen(board, row, col)
                if solve_n_queens(board, row + 1):
                    return true
                remove_queen(board, row, col)
        return false

    function is_safe(board, row, col):
        check if placing queen at (row, col) is safe
    ```

## Dynamic Programming
- **Definition**: Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems.
- **Key Topics**:
  - **Memoization**: Storing the results of expensive function calls.
    ```pseudo
    memo = {}

    function dp_function(parameters):
        if parameters in memo:
            return memo[parameters]
        if base_case_condition:
            result = base_case_value
        else:
            result = dp_function(smaller_parameters)
        memo[parameters] = result
        return result
    ```
  - **Tabulation**: Iteratively solving subproblems and storing the results.
    ```pseudo
    function dp_function(n):
        table = array of size n
        initialize base cases in table
        for i from 1 to n:
            table[i] = compute_value_using_table
        return table[n]
    ```
- **Practice Problems**:
  - Longest Increasing Subsequence: Find the longest increasing subsequence in an array.
    ```pseudo
    function lis(array):
        n = length of array
        lis = array of size n initialized to 1
        for i from 1 to n:
            for j from 0 to i - 1:
                if array[i] > array[j] and lis[i] < lis[j] + 1:
                    lis[i] = lis[j] + 1
        return max(lis)
    ```

## Greedy Algorithms
- **Definition**: Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit.
- **Key Topics**:
  - **Activity Selection**: Selecting the maximum number of activities that don't overlap.
    ```pseudo
    function activity_selection(activities):
        sort activities by finish time
        selected_activities = []
        last_finish_time = 0
        for activity in activities:
            if activity.start >= last_finish_time:
                selected_activities.append(activity)
                last_finish_time = activity.finish
        return selected_activities
    ```
  - **Huffman Coding**: A compression algorithm that uses variable-length codes.
    ```pseudo
    function huffman_coding(frequencies):
        create priority queue of nodes
        while more than one node in queue:
            left = extract_min(queue)
            right = extract_min(queue)
            new_node = Node(left, right)
            insert new_node into queue
        return extract_min(queue)

    function generate_codes(node, code):
        if node is leaf:
            print(node.character, code)
        else:
            generate_codes(node.left, code + "0")
            generate_codes(node.right, code + "1")
    ```
- **Practice Problems**:
  - Activity Selection: Select the maximum number of activities that don't overlap.
    ```pseudo
    function activity_selection(activities):
        sort activities by finish time
        selected_activities = []
        last_finish_time = 0
        for activity in activities:
            if activity.start >= last_finish_time:
                selected_activities.append(activity)
                last_finish_time = activity.finish
        return selected_activities
    ```
## Sorting and Searching
- **Definition**: Sorting is the process of arranging data in a particular order. Searching is the process of finding an element in a data structure.
- **Key Topics**:
  - **Quick Sort**: A divide-and-conquer algorithm that sorts by partitioning an array into subarrays.
    ```pseudo
    function quick_sort(array, low, high):
        if low < high:
            pi = partition(array, low, high)
            quick_sort(array, low, pi - 1)
            quick_sort(array, pi + 1, high)

    function partition(array, low, high):
        pivot = array[high]
        i = low - 1
        for j from low to high - 1:
            if array[j] < pivot:
                i = i + 1
                swap array[i] with array[j]
        swap array[i + 1] with array[high]
        return i + 1
    ```
  - **Binary Search**: A search algorithm that finds the position of a target value within a sorted array.
    ```pseudo
    function binary_search(array, target):
        low = 0
        high = length of array - 1
        while low <= high:
            mid = low + (high - low) / 2
            if array[mid] == target:
                return mid
            elif array[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        return -1
    ```
- **Practice Problems**:
  - Quick Sort: Implement quick sort to sort an array.
    ```pseudo
    function quick_sort(array, low, high):
        if low < high:
            pi = partition(array, low, high)
            quick_sort(array, low, pi - 1)
            quick_sort(array, pi + 1, high)

    function partition(array, low, high):
        pivot = array[high]
        i = low - 1
        for j from low to high - 1:
            if array[j] < pivot:
                i = i + 1
                swap array[i] with array[j]
        swap array[i + 1] with array[high]
        return i + 1
    ```

## Pattern Searching
- **Definition**: Pattern searching algorithms are used to find a pattern in a given string.
- **Key Topics**:
  - **KMP Algorithm**: An efficient pattern searching algorithm that preprocesses the pattern to determine the shifts.
    ```pseudo
    function KMP_search(text, pattern):
        lps = compute_lps_array(pattern)
        i = 0
        j = 0
        while i < length of text:
            if pattern[j] == text[i]:
                i = i + 1
                j = j + 1
            if j == length of pattern:
                print "Pattern found at index", i - j
                j = lps[j - 1]
            elif i < length of text and pattern[j] != text[i]:
                if j != 0:
                    j = lps[j - 1]
                else:
                    i = i + 1

    function compute_lps_array(pattern):
        length = 0
        lps[0] = 0
        i = 1
        while i < length of pattern:
            if pattern[i] == pattern[length]:
                length = length + 1
                lps[i] = length
                i = i + 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i = i + 1
        return lps
    ```
  - **Rabin-Karp Algorithm**: A pattern searching algorithm that uses hashing to find any one of a set of pattern strings in a text.
    ```pseudo
    function Rabin_Karp_search(text, pattern, q):
        d = 256
        n = length of text
        m = length of pattern
        p = 0
        t = 0
        h = 1
        for i from 0 to m - 1:
            h = (h * d) % q
        for i from 0 to m - 1:
            p = (d * p + pattern[i]) % q
            t = (d * t + text[i]) % q
        for i from 0 to n - m:
            if p == t:
                for j from 0 to m - 1:
                    if text[i + j] != pattern[j]:
                        break
                if j == m:
                    print "Pattern found at index", i
            if i < n - m:
                t = (d * (t - text[i] * h) + text[i + m]) % q
                if t < 0:
                    t = t + q
    ```
- **Practice Problems**:
  - KMP Algorithm: Implement the KMP algorithm for pattern searching.
    ```pseudo
    function KMP_search(text, pattern):
        lps = compute_lps_array(pattern)
        i = 0
        j = 0
        while i < length of text:
            if pattern[j] == text[i]:
                i = i + 1
                j = j + 1
            if j == length of pattern:
                print "Pattern found at index", i - j
                j = lps[j - 1]
            elif i < length of text and pattern[j] != text[i]:
                if j != 0:
                    j = lps[j - 1]
                else:
                    i = i + 1

    function compute_lps_array(pattern):
        length = 0
        lps[0] = 0
        i = 1
        while i < length of pattern:
            if pattern[i] == pattern[length]:
                length = length + 1
                lps[i] = length
                i = i + 1
            else:
                if length != 0:
                    length = lps[length - 1]
                else:
                    lps[i] = 0
                    i = i + 1
        return lps
    ```

## Divide and Conquer
- **Definition**: Divide and conquer is an algorithm design paradigm based on multi-branched recursion.
- **Key Topics**:
  - **Merge Sort**: A divide-and-conquer algorithm that divides the array into halves, sorts them, and then merges them.
    ```pseudo
    function merge_sort(array):
        if length of array > 1:
            mid = length of array // 2
            left_half = array[:mid]
            right_half = array[mid:]
            merge_sort(left_half)
            merge_sort(right_half)
            i = j = k = 0
            while i < length of left_half and j < length of right_half:
                if left_half[i] < right_half[j]:
                    array[k] = left_half[i]
                    i = i + 1
                else:
                    array[k] = right_half[j]
                    j = j + 1
                k = k + 1
            while i < length of left_half:
                array[k] = left_half[i]
                i = i + 1
                k = k + 1
            while j < length of right_half:
                array[k] = right_half[j]
                j = j + 1
                k = k + 1
    ```
  - **Quick Sort**: A divide-and-conquer algorithm that sorts by partitioning an array into subarrays.
    ```pseudo
    function quick_sort(array, low, high):
        if low < high:
            pi = partition(array, low, high)
            quick_sort(array, low, pi - 1)
            quick_sort(array, pi + 1, high)

    function partition(array, low, high):
        pivot = array[high]
        i = low - 1
        for j from low to high - 1:
            if array[j] < pivot:
                i = i + 1
                swap array[i] with array[j]
        swap array[i + 1] with array[high]
        return i + 1
    ```
- **Practice Problems**:
  - Merge Sort: Implement merge sort to sort an array.
    ```pseudo
    function merge_sort(array):
        if length of array > 1:
            mid = length of array // 2
            left_half = array[:mid]
            right_half = array[mid:]
            merge_sort(left_half)
            merge_sort(right_half)
            i = j = k = 0
            while i < length of left_half and j < length of right_half:
                if left_half[i] < right_half[j]:
                    array[k] = left_half[i]
                    i = i + 1
                else:
                    array[k] = right_half[j]
                    j = j + 1
                k = k + 1
            while i < length of left_half:
                array[k] = left_half[i]
                i = i + 1
                k = k + 1
            while j < length of right_half:
                array[k] = right_half[j]
                j = j + 1
                k = k + 1
    ```
## Number Theory
- **Definition**: Number theory is a branch of mathematics devoted to the study of the integers and more generally to objects built out of them.
- **Key Topics**:
  - **Prime Numbers**: Numbers greater than 1 that have no positive divisors other than 1 and themselves.
    ```pseudo
    function is_prime(n):
        if n <= 1:
            return false
        for i from 2 to sqrt(n):
            if n % i == 0:
                return false
        return true
    ```
  - **GCD and LCM**: Greatest common divisor and least common multiple of two numbers.
    ```pseudo
    function gcd(a, b):
        if b == 0:
            return a
        return gcd(b, a % b)

    function lcm(a, b):
        return (a * b) / gcd(a, b)
    ```
- **Practice Problems**:
  - Sieve of Eratosthenes: Find all prime numbers up to a given limit.
    ```pseudo
    function sieve_of_eratosthenes(n):
        prime = array of true values of size n+1
        p = 2
        while p * p <= n:
            if prime[p] == true:
                for i from p * p to n with step p:
                    prime[i] = false
            p = p + 1
        for p from 2 to n:
            if prime[p]:
                print p
    ```

## Bit Manipulation
- **Definition**: Bit manipulation is the act of algorithmically manipulating bits or binary digits.
- **Key Topics**:
  - **Bitwise Operators**: Operators that directly manipulate bits.
    ```pseudo
    AND: &
    OR: |
    XOR: ^
    NOT: ~
    Left Shift: <<
    Right Shift: >>
    ```
  - **Applications of Bit Manipulation**: Use cases like counting set bits, checking power of two, etc.
    ```pseudo
    function count_set_bits(n):
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count

    function is_power_of_two(n):
        return n > 0 and (n & (n - 1)) == 0
    ```
- **Practice Problems**:
  - Count Set Bits: Count the number of set bits in an integer.
    ```pseudo
    function count_set_bits(n):
        count = 0
        while n:
            count += n & 1
            n >>= 1
        return count
    ```
    
---

Happy coding and good luck with your revisions!

---



