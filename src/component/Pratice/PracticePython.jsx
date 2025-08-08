import React, { useState, useEffect } from 'react';

const PracticePython = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Core Python topics and questions
  const topics = {
    basics: {
      name: "Python Basics",
      questions: [
        {
          id: 1,
          question: "Write a Python program to print 'Hello, World!'",
          difficulty: "Beginner",
          solutionHint: "Use the print() function",
          codeExample: `print("Hello, World!")`
        },
        {
          id: 2,
          question: "Create a program that takes user input and prints it back",
          difficulty: "Beginner",
          solutionHint: "Use the input() function",
          codeExample: `name = input("Enter your name: ")
print("Hello, " + name)`
        },
        {
          id: 3,
          question: "Write a program to add two numbers and display the result",
          difficulty: "Beginner",
          solutionHint: "Use the + operator",
          codeExample: `num1 = 5
num2 = 10
sum = num1 + num2
print("Sum:", sum)`
        },
        {
          id: 4,
          question: "Create a program to check if a number is even or odd",
          difficulty: "Beginner",
          solutionHint: "Use the modulus operator %",
          codeExample: `num = int(input("Enter a number: "))
if num % 2 == 0:
    print(num, "is even")
else:
    print(num, "is odd")`
        },
        {
          id: 5,
          question: "Write a program to find the largest of three numbers",
          difficulty: "Beginner",
          solutionHint: "Use comparison operators",
          codeExample: `a = 10
b = 20
c = 15
largest = max(a, b, c)
print("Largest number is:", largest)`
        },
        {
          id: 6,
          question: "Create a program to calculate the factorial of a number",
          difficulty: "Beginner",
          solutionHint: "Use a loop or recursion",
          codeExample: `def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

num = 5
print("Factorial of", num, "is", factorial(num))`
        },
        {
          id: 7,
          question: "Write a program to display the Fibonacci sequence up to n terms",
          difficulty: "Beginner",
          solutionHint: "Initialize first two numbers and use a loop",
          codeExample: `n = 10
a, b = 0, 1
print("Fibonacci sequence:")
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b`
        },
        {
          id: 8,
          question: "Create a program to check if a number is prime",
          difficulty: "Beginner",
          solutionHint: "Check divisibility from 2 to square root of the number",
          codeExample: `import math

def is_prime(num):
    if num <= 1:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

num = 13
print(num, "is prime:", is_prime(num))`
        },
        {
          id: 9,
          question: "Write a program to reverse a string",
          difficulty: "Beginner",
          solutionHint: "Use slicing or the reversed() function",
          codeExample: `text = "Hello, World!"
reversed_text = text[::-1]
print("Reversed string:", reversed_text)`
        },
        {
          id: 10,
          question: "Create a program to find the sum of all elements in a list",
          difficulty: "Beginner",
          solutionHint: "Use the sum() function or a loop",
          codeExample: `numbers = [5, 10, 15, 20, 25]
total = sum(numbers)
print("Sum of list elements:", total)`
        }
      ]
    },
    oop: {
      name: "OOP Concepts",
      questions: [
        {
          id: 1,
          question: "Create a class 'Person' with attributes name and age, with getters and setters",
          difficulty: "Beginner",
          solutionHint: "Use property decorators or traditional getter/setter methods",
          codeExample: `class Person:
    def __init__(self, name, age):
        self._name = name
        self._age = age
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        self._age = value`
        },
        {
          id: 2,
          question: "Implement inheritance by creating 'Student' class that extends 'Person' with additional attribute 'student_id'",
          difficulty: "Intermediate",
          solutionHint: "Use the super() function to call parent class methods",
          codeExample: `class Student(Person):
    def __init__(self, name, age, student_id):
        super().__init__(name, age)
        self.student_id = student_id`
        },
        {
          id: 3,
          question: "Create an abstract base class 'Shape' with abstract method 'area()' and concrete subclasses",
          difficulty: "Intermediate",
          solutionHint: "Use the abc module to create abstract classes",
          codeExample: `from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
    
    def area(self):
        return 3.14 * self.radius ** 2`
        },
        {
          id: 4,
          question: "Implement polymorphism with a base class 'Animal' and derived classes 'Dog' and 'Cat'",
          difficulty: "Intermediate",
          solutionHint: "Override methods in child classes",
          codeExample: `class Animal:
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Bark")

class Cat(Animal):
    def make_sound(self):
        print("Meow")`
        },
        {
          id: 5,
          question: "Create a class demonstrating method overloading (Python style)",
          difficulty: "Intermediate",
          solutionHint: "Use default arguments or variable-length arguments",
          codeExample: `class Calculator:
    def add(self, a, b, c=0):
        return a + b + c

calc = Calculator()
print(calc.add(2, 3))      # 5
print(calc.add(2, 3, 4))   # 9`
        },
        {
          id: 6,
          question: "Implement a singleton class in Python",
          difficulty: "Intermediate",
          solutionHint: "Override the __new__ method or use a decorator",
          codeExample: `class Singleton:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance`
        },
        {
          id: 7,
          question: "Create a class demonstrating operator overloading (e.g., +, ==)",
          difficulty: "Intermediate",
          solutionHint: "Implement special methods like __add__, __eq__",
          codeExample: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y`
        },
        {
          id: 8,
          question: "Implement composition by creating a 'Car' class that contains 'Engine' and 'Wheel' objects",
          difficulty: "Intermediate",
          solutionHint: "Create classes for components and include them as attributes",
          codeExample: `class Engine:
    def start(self):
        print("Engine started")

class Wheel:
    def rotate(self):
        print("Wheel rotating")

class Car:
    def __init__(self):
        self.engine = Engine()
        self.wheels = [Wheel() for _ in range(4)]
    
    def drive(self):
        self.engine.start()
        for wheel in self.wheels:
            wheel.rotate()`
        },
        {
          id: 9,
          question: "Create a class demonstrating class methods and static methods",
          difficulty: "Intermediate",
          solutionHint: "Use @classmethod and @staticmethod decorators",
          codeExample: `class MyClass:
    class_variable = 0
    
    @classmethod
    def class_method(cls):
        print("Class method called")
        cls.class_variable += 1
    
    @staticmethod
    def static_method():
        print("Static method called")`
        },
        {
          id: 10,
          question: "Implement a data class using Python's dataclasses module",
          difficulty: "Intermediate",
          solutionHint: "Use the @dataclass decorator",
          codeExample: `from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float
    z: float = 0.0  # Default value`
        }
      ]
    },
    data_structures: {
      name: "Data Structures",
      questions: [
        {
          id: 1,
          question: "Implement a stack using lists",
          difficulty: "Beginner",
          solutionHint: "Use list's append() and pop() methods",
          codeExample: `stack = []
stack.append(1)  # Push
stack.append(2)
stack.append(3)
print(stack.pop())  # Pop (returns 3)`
        },
        {
          id: 2,
          question: "Implement a queue using collections.deque",
          difficulty: "Beginner",
          solutionHint: "Use deque's append() and popleft() methods",
          codeExample: `from collections import deque

queue = deque()
queue.append(1)  # Enqueue
queue.append(2)
queue.append(3)
print(queue.popleft())  # Dequeue (returns 1)`
        },
        {
          id: 3,
          question: "Create a linked list implementation in Python",
          difficulty: "Intermediate",
          solutionHint: "Create Node and LinkedList classes",
          codeExample: `class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        last = self.head
        while last.next:
            last = last.next
        last.next = new_node`
        },
        {
          id: 4,
          question: "Implement a binary search tree with insert and search operations",
          difficulty: "Intermediate",
          solutionHint: "Create Node and BST classes with recursive methods",
          codeExample: `class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.val = key

class BST:
    def insert(self, root, key):
        if root is None:
            return Node(key)
        else:
            if root.val < key:
                root.right = self.insert(root.right, key)
            else:
                root.left = self.insert(root.left, key)
        return root
    
    def search(self, root, key):
        if root is None or root.val == key:
            return root
        if root.val < key:
            return self.search(root.right, key)
        return self.search(root.left, key)`
        },
        {
          id: 5,
          question: "Implement a graph using adjacency list representation",
          difficulty: "Intermediate",
          solutionHint: "Use a dictionary to map vertices to their neighbors",
          codeExample: `class Graph:
    def __init__(self):
        self.adj_list = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.adj_list:
            self.adj_list[vertex] = []
    
    def add_edge(self, v1, v2):
        self.adj_list[v1].append(v2)
        self.adj_list[v2].append(v1)`
        },
        {
          id: 6,
          question: "Implement a priority queue using the heapq module",
          difficulty: "Intermediate",
          solutionHint: "Use heapq's heappush and heappop functions",
          codeExample: `import heapq

pq = []
heapq.heappush(pq, (2, 'code'))
heapq.heappush(pq, (1, 'eat'))
heapq.heappush(pq, (3, 'sleep'))

while pq:
    print(heapq.heappop(pq))  # Returns (1, 'eat') first`
        },
        {
          id: 7,
          question: "Implement a hash table with collision handling",
          difficulty: "Advanced",
          solutionHint: "Use chaining (lists at each bucket) for collision resolution",
          codeExample: `class HashTable:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]
    
    def _hash(self, key):
        return hash(key) % self.size
    
    def set(self, key, value):
        hash_key = self._hash(key)
        for i, (k, v) in enumerate(self.table[hash_key]):
            if k == key:
                self.table[hash_key][i] = (key, value)
                return
        self.table[hash_key].append((key, value))
    
    def get(self, key):
        hash_key = self._hash(key)
        for k, v in self.table[hash_key]:
            if k == key:
                return v
        raise KeyError(key)`
        },
        {
          id: 8,
          question: "Implement a trie (prefix tree) data structure",
          difficulty: "Advanced",
          solutionHint: "Create TrieNode and Trie classes",
          codeExample: `class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    
    def insert(self, word):
        node = self.root
        for char in word:
            if char not in node.children:
                node.children[char] = TrieNode()
            node = node.children[char]
        node.is_end = True`
        },
        {
          id: 9,
          question: "Implement a disjoint set (union-find) data structure",
          difficulty: "Advanced",
          solutionHint: "Use path compression and union by rank optimizations",
          codeExample: `class DisjointSet:
    def __init__(self, size):
        self.parent = [i for i in range(size)]
        self.rank = [0] * size
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # Path compression
        return self.parent[x]
    
    def union(self, x, y):
        x_root = self.find(x)
        y_root = self.find(y)
        
        if x_root == y_root:
            return
        
        # Union by rank
        if self.rank[x_root] < self.rank[y_root]:
            self.parent[x_root] = y_root
        else:
            self.parent[y_root] = x_root
            if self.rank[x_root] == self.rank[y_root]:
                self.rank[x_root] += 1`
        },
        {
          id: 10,
          question: "Implement a LRU (Least Recently Used) cache",
          difficulty: "Advanced",
          solutionHint: "Use OrderedDict from collections module",
          codeExample: `from collections import OrderedDict

class LRUCache:
    def __init__(self, capacity):
        self.cache = OrderedDict()
        self.capacity = capacity
    
    def get(self, key):
        if key not in self.cache:
            return -1
        self.cache.move_to_end(key)
        return self.cache[key]
    
    def put(self, key, value):
        if key in self.cache:
            self.cache.move_to_end(key)
        self.cache[key] = value
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)`
        }
      ]
    },
    algorithms: {
      name: "Algorithms",
      questions: [
        {
          id: 1,
          question: "Implement bubble sort algorithm",
          difficulty: "Beginner",
          solutionHint: "Compare adjacent elements and swap if in wrong order",
          codeExample: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]`
        },
        {
          id: 2,
          question: "Implement binary search algorithm",
          difficulty: "Beginner",
          solutionHint: "Divide the search interval in half each time",
          codeExample: `def binary_search(arr, target):
    low, high = 0, len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1`
        },
        {
          id: 3,
          question: "Implement merge sort algorithm",
          difficulty: "Intermediate",
          solutionHint: "Divide the array into halves and merge them sorted",
          codeExample: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        
        merge_sort(L)
        merge_sort(R)
        
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
        
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1`
        },
        {
          id: 4,
          question: "Implement quick sort algorithm",
          difficulty: "Intermediate",
          solutionHint: "Choose a pivot and partition the array around it",
          codeExample: `def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quick_sort(left) + middle + quick_sort(right)`
        },
        {
          id: 5,
          question: "Implement depth-first search (DFS) for a graph",
          difficulty: "Intermediate",
          solutionHint: "Use recursion or a stack to explore as far as possible",
          codeExample: `def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    visited.add(start)
    print(start, end=" ")
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)`
        },
        {
          id: 6,
          question: "Implement breadth-first search (BFS) for a graph",
          difficulty: "Intermediate",
          solutionHint: "Use a queue to explore neighbors level by level",
          codeExample: `from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)
    
    while queue:
        vertex = queue.popleft()
        print(vertex, end=" ")
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)`
        },
        {
          id: 7,
          question: "Implement Dijkstra's shortest path algorithm",
          difficulty: "Advanced",
          solutionHint: "Use a priority queue to always expand the closest node",
          codeExample: `import heapq

def dijkstra(graph, start):
    distances = {vertex: float('infinity') for vertex in graph}
    distances[start] = 0
    pq = [(0, start)]
    
    while pq:
        current_dist, current_vertex = heapq.heappop(pq)
        if current_dist > distances[current_vertex]:
            continue
        for neighbor, weight in graph[current_vertex].items():
            distance = current_dist + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(pq, (distance, neighbor))
    return distances`
        },
        {
          id: 8,
          question: "Implement the knapsack problem using dynamic programming",
          difficulty: "Advanced",
          solutionHint: "Build a 2D table to store intermediate results",
          codeExample: `def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(values[i-1] + dp[i-1][w-weights[i-1]], dp[i-1][w])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]`
        },
        {
          id: 9,
          question: "Implement the Floyd-Warshall algorithm for all-pairs shortest paths",
          difficulty: "Advanced",
          solutionHint: "Use a 3D dynamic programming approach",
          codeExample: `def floyd_warshall(graph):
    n = len(graph)
    dist = [[float('inf')] * n for _ in range(n)]
    
    for i in range(n):
        dist[i][i] = 0
        for j, weight in graph[i].items():
            dist[i][j] = weight
    
    for k in range(n):
        for i in range(n):
            for j in range(n):
                if dist[i][j] > dist[i][k] + dist[k][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    return dist`
        },
        {
          id: 10,
          question: "Implement the A* search algorithm",
          difficulty: "Advanced",
          solutionHint: "Use a priority queue with heuristic function",
          codeExample: `import heapq

def heuristic(a, b):
    return abs(a[0] - b[0]) + abs(a[1] - b[1])

def a_star(graph, start, goal):
    frontier = []
    heapq.heappush(frontier, (0, start))
    came_from = {start: None}
    cost_so_far = {start: 0}
    
    while frontier:
        current = heapq.heappop(frontier)[1]
        if current == goal:
            break
        for next_node in graph.neighbors(current):
            new_cost = cost_so_far[current] + graph.cost(current, next_node)
            if next_node not in cost_so_far or new_cost < cost_so_far[next_node]:
                cost_so_far[next_node] = new_cost
                priority = new_cost + heuristic(goal, next_node)
                heapq.heappush(frontier, (priority, next_node))
                came_from[next_node] = current
    return came_from, cost_so_far`
        }
      ]
    },
    file_handling: {
      name: "File Handling",
      questions: [
        {
          id: 1,
          question: "Write a program to read a text file and print its contents",
          difficulty: "Beginner",
          solutionHint: "Use the open() function with 'r' mode",
          codeExample: `with open('file.txt', 'r') as file:
    contents = file.read()
    print(contents)`
        },
        {
          id: 2,
          question: "Write a program to write text to a file",
          difficulty: "Beginner",
          solutionHint: "Use the open() function with 'w' mode",
          codeExample: `with open('output.txt', 'w') as file:
    file.write("Hello, World!")`
        },
        {
          id: 3,
          question: "Write a program to append text to an existing file",
          difficulty: "Beginner",
          solutionHint: "Use the open() function with 'a' mode",
          codeExample: `with open('output.txt', 'a') as file:
    file.write("\\nAppending new line")`
        },
        {
          id: 4,
          question: "Write a program to count the number of lines in a file",
          difficulty: "Beginner",
          solutionHint: "Use readlines() or iterate through the file",
          codeExample: `with open('file.txt', 'r') as file:
    line_count = sum(1 for line in file)
print("Number of lines:", line_count)`
        },
        {
          id: 5,
          question: "Write a program to copy the contents of one file to another",
          difficulty: "Beginner",
          solutionHint: "Read from one file and write to another",
          codeExample: `with open('source.txt', 'r') as source, open('destination.txt', 'w') as dest:
    dest.write(source.read())`
        },
        {
          id: 6,
          question: "Write a program to read a CSV file and process its contents",
          difficulty: "Intermediate",
          solutionHint: "Use the csv module or pandas library",
          codeExample: `import csv

with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)`
        },
        {
          id: 7,
          question: "Write a program to read a JSON file and extract data",
          difficulty: "Intermediate",
          solutionHint: "Use the json module",
          codeExample: `import json

with open('data.json', 'r') as file:
    data = json.load(file)
    print(data)`
        },
        {
          id: 8,
          question: "Write a program to handle file exceptions (FileNotFoundError, PermissionError)",
          difficulty: "Intermediate",
          solutionHint: "Use try-except blocks",
          codeExample: `try:
    with open('nonexistent.txt', 'r') as file:
        print(file.read())
except FileNotFoundError:
    print("File not found")
except PermissionError:
    print("Permission denied")`
        },
        {
          id: 9,
          question: "Write a program to read a file line by line and process each line",
          difficulty: "Intermediate",
          solutionHint: "Iterate through the file object",
          codeExample: `with open('large_file.txt', 'r') as file:
    for line in file:
        processed_line = line.strip().upper()
        print(processed_line)`
        },
        {
          id: 10,
          question: "Write a program to work with binary files (read/write)",
          difficulty: "Intermediate",
          solutionHint: "Use 'rb' and 'wb' modes for binary operations",
          codeExample: `# Writing binary data
with open('binary.bin', 'wb') as file:
    file.write(b'\\x00\\x01\\x02\\x03')

# Reading binary data
with open('binary.bin', 'rb') as file:
    data = file.read()
    print(data)`
        }
      ]
    },
    decorators: {
      name: "Decorators",
      questions: [
        {
          id: 1,
          question: "Create a simple decorator that prints a message before and after function execution",
          difficulty: "Beginner",
          solutionHint: "Define a wrapper function inside the decorator",
          codeExample: `def simple_decorator(func):
    def wrapper():
        print("Before function execution")
        func()
        print("After function execution")
    return wrapper

@simple_decorator
def greet():
    print("Hello, World!")

greet()`
        },
        {
          id: 2,
          question: "Create a decorator that measures the execution time of a function",
          difficulty: "Intermediate",
          solutionHint: "Use time.time() before and after function call",
          codeExample: `import time

def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

@timing_decorator
def long_running_function():
    time.sleep(2)

long_running_function()`
        },
        {
          id: 3,
          question: "Create a decorator that caches function results to avoid repeated calculations",
          difficulty: "Intermediate",
          solutionHint: "Use a dictionary to store function arguments and results",
          codeExample: `def cache_decorator(func):
    cache = {}
    def wrapper(*args):
        if args in cache:
            return cache[args]
        result = func(*args)
        cache[args] = result
        return result
    return wrapper

@cache_decorator
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)`
        },
        {
          id: 4,
          question: "Create a decorator that validates function arguments",
          difficulty: "Intermediate",
          solutionHint: "Check argument types or values in the wrapper",
          codeExample: `def validate_args_decorator(func):
    def wrapper(a, b):
        if not isinstance(a, int) or not isinstance(b, int):
            raise TypeError("Arguments must be integers")
        if b == 0:
            raise ValueError("Second argument cannot be zero")
        return func(a, b)
    return wrapper

@validate_args_decorator
def divide(a, b):
    return a / b`
        },
        {
          id: 5,
          question: "Create a decorator that retries a function if it raises an exception",
          difficulty: "Intermediate",
          solutionHint: "Use a loop and try-except block in the wrapper",
          codeExample: `import random
import time

def retry_decorator(max_retries=3, delay=1):
    def decorator(func):
        def wrapper(*args, **kwargs):
            retries = 0
            while retries < max_retries:
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    retries += 1
                    if retries == max_retries:
                        raise
                    time.sleep(delay)
        return wrapper
    return decorator

@retry_decorator(max_retries=5, delay=2)
def unreliable_function():
    if random.random() < 0.7:
        raise ValueError("Temporary failure")
    return "Success"`
        },
        {
          id: 6,
          question: "Create a class decorator that adds methods to a class",
          difficulty: "Advanced",
          solutionHint: "Modify the class attributes in the decorator",
          codeExample: `def add_methods_decorator(cls):
    def new_method(self):
        return "This is a new method"
    
    cls.new_method = new_method
    return cls

@add_methods_decorator
class MyClass:
    pass

obj = MyClass()
print(obj.new_method())`
        },
        {
          id: 7,
          question: "Create a decorator that logs function calls with arguments and return values",
          difficulty: "Intermediate",
          solutionHint: "Print function name, args, kwargs and return value in wrapper",
          codeExample: `def logging_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@logging_decorator
def add(a, b):
    return a + b

add(3, 5)`
        },
        {
          id: 8,
          question: "Create a decorator that restricts function access based on some condition",
          difficulty: "Intermediate",
          solutionHint: "Check condition in wrapper before calling function",
          codeExample: `def admin_required(func):
    def wrapper(user, *args, **kwargs):
        if user.get('role') != 'admin':
            raise PermissionError("Admin access required")
        return func(user, *args, **kwargs)
    return wrapper

@admin_required
def delete_user(current_user, username):
    return f"User {username} deleted by {current_user['name']}"

admin = {'name': 'Alice', 'role': 'admin'}
regular = {'name': 'Bob', 'role': 'user'}

print(delete_user(admin, 'charlie'))  # Works
print(delete_user(regular, 'dave'))   # Raises PermissionError`
        },
        {
          id: 9,
          question: "Create a decorator that converts function return value to JSON",
          difficulty: "Intermediate",
          solutionHint: "Use json.dumps() on the function result",
          codeExample: `import json

def to_json_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return json.dumps(result)
    return wrapper

@to_json_decorator
def get_data():
    return {'name': 'Alice', 'age': 30, 'city': 'New York'}

print(get_data())  # Returns JSON string`
        },
        {
          id: 10,
          question: "Create a decorator that memoizes class property methods",
          difficulty: "Advanced",
          solutionHint: "Cache property results in the instance dictionary",
          codeExample: `def memoized_property(func):
    @property
    def wrapper(self):
        cache_name = f"_{func.__name__}"
        if not hasattr(self, cache_name):
            setattr(self, cache_name, func(self))
        return getattr(self, cache_name)
    return wrapper

class MyClass:
    @memoized_property
    def expensive_computation(self):
        print("Performing expensive computation...")
        return 42 * 42

obj = MyClass()
print(obj.expensive_computation)  # Computes once
print(obj.expensive_computation)  # Returns cached value`
        }
      ]
    }
  };

  // Filter questions based on search term
  const filteredQuestions = topics[activeTopic].questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (q.solutionHint && q.solutionHint.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Toggle solution visibility
  const toggleSolution = (topic, id) => {
    setShowSolutions(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  // Toggle code example visibility
  const toggleCodeExample = (topic, id) => {
    setShowCodeExamples(prev => ({
      ...prev,
      [`${topic}-${id}`]: !prev[`${topic}-${id}`]
    }));
  };

  return (
    <div className="python-practice-app">
      <header>
        <h1>Core Python Practice Questions</h1>
        
        <nav className="topic-nav">
          {Object.keys(topics).map(topic => (
            <button 
              key={topic}
              className={activeTopic === topic ? 'active' : ''}
              onClick={() => setActiveTopic(topic)}
            >
              {topics[topic].name}
            </button>
          ))}
        </nav>
        
        <div className="search-container">
          <input
            type="text"
            placeholder={`Search ${topics[activeTopic].name} questions...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm('')}
            >
              Clear
            </button>
          )}
        </div>
      </header>

      <main>
        <div className="questions-container">
          <h2>{topics[activeTopic].name} Questions ({filteredQuestions.length})</h2>
          
          {filteredQuestions.length === 0 ? (
            <div className="no-results">No questions match your search criteria.</div>
          ) : (
            <ul className="questions-list">
              {filteredQuestions.map(q => {
                const questionKey = `${activeTopic}-${q.id}`;
                
                return (
                  <li 
                    key={q.id} 
                    className="question-card"
                  >
                    <div className="question-header">
                      <div className="question-meta">
                        <span className="question-number">Question {q.id}</span>
                        <span className={`difficulty ${q.difficulty.toLowerCase()}`}>
                          {q.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <p className="question-text">{q.question}</p>
                    
                    <div className="question-actions">
                      <button 
                        className="solution-toggle"
                        onClick={() => toggleSolution(activeTopic, q.id)}
                      >
                        {showSolutions[questionKey] ? 'Hide Hint' : 'Show Hint'}
                      </button>
                      
                      {q.codeExample && (
                        <button 
                          className="code-toggle"
                          onClick={() => toggleCodeExample(activeTopic, q.id)}
                        >
                          {showCodeExamples[questionKey] ? 'Hide Code' : 'Show Code'}
                        </button>
                      )}
                    </div>
                    
                    {showSolutions[questionKey] && q.solutionHint && (
                      <div className="solution-hint">
                        <strong>Hint:</strong> {q.solutionHint}
                      </div>
                    )}
                    
                    {showCodeExamples[questionKey] && q.codeExample && (
                      <div className="code-example">
                        <strong>Code Example:</strong>
                        <pre>{q.codeExample}</pre>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </main>

      <style jsx>{`
        .python-practice-app {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
          color: #333;
        }
        
        header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #eee;
        }
        
        h1 {
          color: #2c3e50;
          margin-bottom: 20px;
        }
        
        h2 {
          color: #3498db;
          margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        
        .topic-nav {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        
        .topic-nav button {
          padding: 8px 15px;
          border: none;
          background-color: #f0f0f0;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;
          font-size: 0.9em;
        }
        
        .topic-nav button:hover {
          background-color: #e0e0e0;
        }
        
        .topic-nav button.active {
          background-color: #3498db;
          color: white;
        }
        
        .search-container {
          margin: 20px auto;
          max-width: 500px;
          display: flex;
          gap: 10px;
        }
        
        .search-input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          font-size: 1em;
        }
        
        .clear-search {
          padding: 0 15px;
          background-color: #e74c3c;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        .questions-list {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .question-card {
          background-color: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .question-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        
        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }
        
        .question-meta {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .question-number {
          font-weight: bold;
          color: #2c3e50;
        }
        
        .question-text {
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .difficulty {
          padding: 3px 10px;
          border-radius: 15px;
          font-size: 0.8em;
          font-weight: bold;
          color: white;
        }
        
        .difficulty.beginner {
          background-color: #2ecc71;
        }
        
        .difficulty.intermediate {
          background-color: #f39c12;
        }
        
        .difficulty.advanced {
          background-color: #e74c3c;
        }
        
        .question-actions {
          display: flex;
          gap: 10px;
          margin-bottom: 15px;
        }
        
        .solution-toggle, .code-toggle {
          padding: 8px 15px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9em;
          transition: background-color 0.3s;
        }
        
        .solution-toggle {
          background-color: #3498db;
          color: white;
        }
        
        .solution-toggle:hover {
          background-color: #2980b9;
        }
        
        .code-toggle {
          background-color: #9b59b6;
          color: white;
        }
        
        .code-toggle:hover {
          background-color: #8e44ad;
        }
        
        .solution-hint, .code-example {
          margin-top: 15px;
          padding: 15px;
          background-color: #f8f9fa;
          border-radius: 4px;
          font-size: 0.95em;
          line-height: 1.6;
        }
        
        .solution-hint {
          border-left: 4px solid #3498db;
        }
        
        .code-example {
          border-left: 4px solid #9b59b6;
        }
        
        .code-example pre {
          white-space: pre-wrap;
          background-color: #2c3e50;
          color: #ecf0f1;
          padding: 10px;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .no-results {
          text-align: center;
          padding: 40px;
          color: #7f8c8d;
          font-style: italic;
        }
        
        @media (max-width: 768px) {
          .python-practice-app {
            padding: 15px;
          }
          
          .topic-nav button {
            padding: 6px 10px;
            font-size: 0.8em;
          }
          
          .question-actions {
            flex-direction: column;
          }
          
          .solution-toggle, .code-toggle {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PracticePython;