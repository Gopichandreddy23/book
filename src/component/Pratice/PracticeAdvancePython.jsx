import React, { useState, useEffect } from 'react';

const PracticeAdvancedPython = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('concurrency');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Advanced Python topics and questions
  const topics = {
    concurrency: {
      name: "Concurrency & Parallelism",
      questions: [
        {
          id: 1,
          question: "Implement a multithreaded program that calculates the sum of numbers using a thread pool",
          difficulty: "Advanced",
          solutionHint: "Use concurrent.futures.ThreadPoolExecutor to manage threads",
          codeExample: `import concurrent.futures

def calculate_sum(numbers):
    return sum(numbers)

def main():
    data = [list(range(1, 1000001)), list(range(1000001, 2000001))]
    
    with concurrent.futures.ThreadPoolExecutor() as executor:
        results = list(executor.map(calculate_sum, data))
    
    total = sum(results)
    print(f"Total sum: {total}")

if __name__ == "__main__":
    main()`
        },
        {
          id: 2,
          question: "Implement a multiprocessing program to count words in large text files",
          difficulty: "Advanced",
          solutionHint: "Use multiprocessing.Pool to distribute work across processes",
          codeExample: `import multiprocessing
import os

def count_words(filename):
    with open(filename, 'r') as file:
        text = file.read()
    return len(text.split())

def main():
    files = ['large_file1.txt', 'large_file2.txt', 'large_file3.txt']
    
    with multiprocessing.Pool() as pool:
        word_counts = pool.map(count_words, files)
    
    print(f"Total words: {sum(word_counts)}")

if __name__ == "__main__":
    main()`
        },
        {
          id: 3,
          question: "Implement an asyncio-based web scraper that fetches multiple URLs concurrently",
          difficulty: "Advanced",
          solutionHint: "Use aiohttp for async HTTP requests and asyncio.gather for concurrency",
          codeExample: `import asyncio
import aiohttp

async def fetch_url(session, url):
    async with session.get(url) as response:
        return await response.text()

async def main():
    urls = [
        'https://example.com',
        'https://example.org',
        'https://example.net'
    ]
    
    async with aiohttp.ClientSession() as session:
        tasks = [fetch_url(session, url) for url in urls]
        results = await asyncio.gather(*tasks)
    
    for url, content in zip(urls, results):
        print(f"{url}: {len(content)} bytes")

asyncio.run(main())`
        },
        {
          id: 4,
          question: "Implement a thread-safe queue for producer-consumer pattern",
          difficulty: "Advanced",
          solutionHint: "Use queue.Queue for thread-safe operations and threading for producers/consumers",
          codeExample: `import threading
import queue
import random
import time

def producer(q, producer_id):
    for i in range(5):
        item = f"Item {i} from producer {producer_id}"
        q.put(item)
        print(f"Produced: {item}")
        time.sleep(random.random())

def consumer(q, consumer_id):
    while True:
        item = q.get()
        if item is None:  # Sentinel value to stop
            q.put(None)   # Pass to next consumer
            break
        print(f"Consumer {consumer_id} got: {item}")
        time.sleep(random.random())
        q.task_done()

q = queue.Queue()
producers = [threading.Thread(target=producer, args=(q, i)) for i in range(2)]
consumers = [threading.Thread(target=consumer, args=(q, i)) for i in range(3)]

for p in producers:
    p.start()
for c in consumers:
    c.start()

for p in producers:
    p.join()

q.put(None)  # Signal consumers to stop
for c in consumers:
    c.join()`
        },
        {
          id: 5,
          question: "Implement a coroutine-based rate limiter for API calls",
          difficulty: "Advanced",
          solutionHint: "Use asyncio.Semaphore to limit concurrent operations",
          codeExample: `import asyncio
import time

class RateLimiter:
    def __init__(self, calls_per_second):
        self.semaphore = asyncio.Semaphore(calls_per_second)
        self.delay = 1 / calls_per_second
        self.last_call = 0

    async def __call__(self, coro):
        async with self.semaphore:
            elapsed = time.time() - self.last_call
            if elapsed < self.delay:
                await asyncio.sleep(self.delay - elapsed)
            self.last_call = time.time()
            return await coro

async def mock_api_call(id):
    print(f"API call {id} started")
    await asyncio.sleep(0.5)
    print(f"API call {id} completed")
    return id

async def main():
    limiter = RateLimiter(2)  # 2 calls per second
    
    tasks = [limiter(mock_api_call(i)) for i in range(10)]
    results = await asyncio.gather(*tasks)
    
    print("All done:", results)

asyncio.run(main())`
        },
        {
          id: 6,
          question: "Implement a process pool with shared memory for numpy array processing",
          difficulty: "Advanced",
          solutionHint: "Use multiprocessing.shared_memory for inter-process data sharing",
          codeExample: `import numpy as np
import multiprocessing as mp
from multiprocessing import shared_memory

def process_data(shm_name, shape, dtype, idx):
    # Attach to existing shared memory
    existing_shm = shared_memory.SharedMemory(name=shm_name)
    arr = np.ndarray(shape, dtype=dtype, buffer=existing_shm.buf)
    
    # Process the data (example: square each element in the slice)
    arr[idx] = arr[idx] ** 2
    
    # Clean up
    existing_shm.close()

def main():
    data = np.random.rand(1000, 1000)  # Large numpy array
    
    # Create shared memory and copy data
    shm = shared_memory.SharedMemory(create=True, size=data.nbytes)
    shm_arr = np.ndarray(data.shape, dtype=data.dtype, buffer=shm.buf)
    np.copyto(shm_arr, data)
    
    # Process in parallel
    with mp.Pool() as pool:
        pool.starmap(process_data, [(shm.name, data.shape, data.dtype, slice(i*100, (i+1)*100)) 
                                  for i in range(10)])
    
    # Verify results
    print("Original sum:", np.sum(data))
    print("Processed sum:", np.sum(shm_arr))
    
    # Clean up
    shm.close()
    shm.unlink()

if __name__ == "__main__":
    main()`
        },
        {
          id: 7,
          question: "Implement a custom thread pool executor with task prioritization",
          difficulty: "Advanced",
          solutionHint: "Use heapq for priority queue and threading for worker management",
          codeExample: `import threading
import heapq
import time
from functools import total_ordering

@total_ordering
class PrioritizedItem:
    def __init__(self, priority, item):
        self.priority = priority
        self.item = item
    
    def __eq__(self, other):
        return self.priority == other.priority
    
    def __lt__(self, other):
        return self.priority < other.priority

class PriorityThreadPool:
    def __init__(self, num_workers):
        self.tasks = []
        self.workers = []
        self.lock = threading.Lock()
        self.condition = threading.Condition(self.lock)
        self.shutdown = False
        
        for _ in range(num_workers):
            worker = threading.Thread(target=self._worker)
            worker.start()
            self.workers.append(worker)
    
    def submit(self, priority, func, *args, **kwargs):
        with self.condition:
            heapq.heappush(self.tasks, PrioritizedItem(priority, (func, args, kwargs)))
            self.condition.notify()
    
    def _worker(self):
        while True:
            with self.condition:
                while not self.tasks and not self.shutdown:
                    self.condition.wait()
                
                if self.shutdown and not self.tasks:
                    return
                
                item = heapq.heappop(self.tasks).item
                func, args, kwargs = item
            
            try:
                func(*args, **kwargs)
            except Exception as e:
                print(f"Task failed: {e}")
    
    def shutdown(self):
        with self.condition:
            self.shutdown = True
            self.condition.notify_all()
        
        for worker in self.workers:
            worker.join()

# Example usage
def task(name, duration):
    print(f"Starting {name}")
    time.sleep(duration)
    print(f"Finished {name}")

pool = PriorityThreadPool(3)
pool.submit(3, task, "Low priority", 2)
pool.submit(1, task, "High priority", 1)
pool.submit(2, task, "Medium priority", 1.5)
time.sleep(5)
pool.shutdown()`
        },
        {
          id: 8,
          question: "Implement a distributed task queue using Redis and multiprocessing",
          difficulty: "Advanced",
          solutionHint: "Use Redis as a message broker and multiple processes as workers",
          codeExample: `# Producer (producer.py)
import redis
import random
import time

r = redis.Redis()

def produce_tasks():
    for i in range(10):
        task = f"task_{i}_{random.randint(1, 100)}"
        r.lpush('task_queue', task)
        print(f"Produced: {task}")
        time.sleep(0.5)

if __name__ == "__main__":
    produce_tasks()

# Consumer (consumer.py)
import redis
import time
import multiprocessing as mp

def worker(worker_id):
    r = redis.Redis()
    while True:
        task = r.brpop('task_queue')[1].decode()
        print(f"Worker {worker_id} processing: {task}")
        time.sleep(1)  # Simulate work

if __name__ == "__main__":
    workers = [mp.Process(target=worker, args=(i,)) for i in range(3)]
    for w in workers:
        w.start()
    for w in workers:
        w.join()`
        },
        {
          id: 9,
          question: "Implement a coroutine-based WebSocket server with broadcast functionality",
          difficulty: "Advanced",
          solutionHint: "Use websockets library and maintain a set of connected clients",
          codeExample: `import asyncio
import websockets

connected = set()

async def broadcast(message):
    if connected:
        await asyncio.wait([client.send(message) for client in connected])

async def handler(websocket, path):
    connected.add(websocket)
    try:
        async for message in websocket:
            await broadcast(f"Client said: {message}")
    finally:
        connected.remove(websocket)

async def main():
    async with websockets.serve(handler, "localhost", 8765):
        await asyncio.Future()  # Run forever

asyncio.run(main())`
        },
        {
          id: 10,
          question: "Implement a CPU-bound task processor with process pool and progress reporting",
          difficulty: "Advanced",
          solutionHint: "Use multiprocessing.Manager for shared progress tracking",
          codeExample: `import multiprocessing as mp
import time
import random

def worker(task, progress_dict, worker_id):
    total = 100
    for i in range(total):
        # Simulate CPU-bound work
        sum(x*x for x in range(10000))
        
        # Update progress
        progress_dict[worker_id] = (i + 1) / total * 100
        time.sleep(random.uniform(0.01, 0.1))

def progress_monitor(progress_dict, num_workers):
    while True:
        progresses = [progress_dict.get(i, 0) for i in range(num_workers)]
        overall = sum(progresses) / num_workers
        print(f"Progress: {overall:.1f}%")
        
        if overall >= 100:
            break
        
        time.sleep(0.1)

def main():
    num_workers = 4
    manager = mp.Manager()
    progress_dict = manager.dict()
    
    monitor = mp.Process(target=progress_monitor, args=(progress_dict, num_workers))
    monitor.start()
    
    with mp.Pool(num_workers) as pool:
        pool.starmap(worker, [(i, progress_dict, i) for i in range(num_workers)])
    
    monitor.join()
    print("All tasks completed")

if __name__ == "__main__":
    main()`
        }
      ]
    },
    metaprogramming: {
      name: "Metaprogramming",
      questions: [
        {
          id: 1,
          question: "Implement a class decorator that automatically adds logging to all methods",
          difficulty: "Advanced",
          solutionHint: "Inspect class methods and wrap them with logging functionality",
          codeExample: `import functools
import inspect

def log_method_calls(cls):
    for name, method in inspect.getmembers(cls, inspect.isfunction):
        @functools.wraps(method)
        def wrapper(*args, **kwargs):
            print(f"Calling {name} with args={args}, kwargs={kwargs}")
            result = method(*args, **kwargs)
            print(f"{name} returned {result}")
            return result
        setattr(cls, name, wrapper)
    return cls

@log_method_calls
class Calculator:
    def add(self, a, b):
        return a + b
    
    def multiply(self, a, b):
        return a * b

calc = Calculator()
calc.add(2, 3)
calc.multiply(4, 5)`
        },
        {
          id: 2,
          question: "Implement a metaclass that enforces method naming conventions",
          difficulty: "Advanced",
          solutionHint: "Create a metaclass that checks method names during class creation",
          codeExample: `class NamingConventionMeta(type):
    def __new__(cls, name, bases, namespace):
        for attr_name, attr_value in namespace.items():
            if callable(attr_value) and not attr_name.startswith('_'):
                if not attr_name.islower() or '_' in attr_name:
                    raise ValueError(f"Method '{attr_name}' must be lowercase without underscores")
        return super().__new__(cls, name, bases, namespace)

class MyClass(metaclass=NamingConventionMeta):
    def validmethod(self):  # OK
        pass
    
    def Invalid_Method(self):  # Will raise ValueError
        pass`
        },
        {
          id: 3,
          question: "Implement a descriptor that validates attribute types",
          difficulty: "Advanced",
          solutionHint: "Create a descriptor class with __get__ and __set__ methods",
          codeExample: `class TypedAttribute:
    def __init__(self, type_):
        self.type_ = type_
        self.name = None
    
    def __set_name__(self, owner, name):
        self.name = name
    
    def __get__(self, instance, owner):
        if instance is None:
            return self
        return instance.__dict__.get(self.name)
    
    def __set__(self, instance, value):
        if not isinstance(value, self.type_):
            raise TypeError(f"Expected {self.type_.__name__}, got {type(value).__name__}")
        instance.__dict__[self.name] = value

class Person:
    name = TypedAttribute(str)
    age = TypedAttribute(int)
    
    def __init__(self, name, age):
        self.name = name
        self.age = age

p = Person("Alice", 30)  # OK
p.age = "thirty"  # Raises TypeError`
        },
        {
          id: 4,
          question: "Implement a context manager that times code execution",
          difficulty: "Advanced",
          solutionHint: "Use __enter__ and __exit__ methods with time.time()",
          codeExample: `import time

class Timer:
    def __enter__(self):
        self.start = time.time()
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.end = time.time()
        self.elapsed = self.end - self.start
        print(f"Execution time: {self.elapsed:.4f} seconds")

with Timer():
    sum(i*i for i in range(1000000))`
        },
        {
          id: 5,
          question: "Implement a decorator that memoizes class instances based on constructor arguments",
          difficulty: "Advanced",
          solutionHint: "Use a cache dictionary keyed by constructor arguments",
          codeExample: `def singleton(cls):
    instances = {}
    
    def wrapper(*args, **kwargs):
        key = (args, frozenset(kwargs.items()))
        if key not in instances:
            instances[key] = cls(*args, **kwargs)
        return instances[key]
    
    return wrapper

@singleton
class DatabaseConnection:
    def __init__(self, host, port):
        self.host = host
        self.port = port
        print(f"Connecting to {host}:{port}")

conn1 = DatabaseConnection("localhost", 5432)
conn2 = DatabaseConnection("localhost", 5432)  # Returns same instance
conn3 = DatabaseConnection("localhost", 3306)  # Creates new instance`
        },
        {
          id: 6,
          question: "Implement a dynamic attribute accessor using __getattr__",
          difficulty: "Advanced",
          solutionHint: "Override __getattr__ to handle missing attribute access",
          codeExample: `class DynamicAttributes:
    def __init__(self):
        self._data = {}
    
    def __getattr__(self, name):
        if name in self._data:
            return self._data[name]
        raise AttributeError(f"'DynamicAttributes' object has no attribute '{name}'")
    
    def __setattr__(self, name, value):
        if name.startswith('_'):
            super().__setattr__(name, value)
        else:
            self._data[name] = value

obj = DynamicAttributes()
obj.foo = 42
print(obj.foo)  # 42
print(obj.bar)  # Raises AttributeError`
        },
        {
          id: 7,
          question: "Implement a class that acts as a dictionary with attribute access",
          difficulty: "Advanced",
          solutionHint: "Inherit from collections.UserDict and implement __getattr__",
          codeExample: `from collections import UserDict

class AttrDict(UserDict):
    def __getattr__(self, key):
        try:
            return self.data[key]
        except KeyError:
            raise AttributeError(f"'AttrDict' object has no attribute '{key}'")
    
    def __setattr__(self, key, value):
        if key == 'data':
            super().__setattr__(key, value)
        else:
            self.data[key] = value

d = AttrDict()
d.foo = 42
print(d.foo)  # 42
print(d['foo'])  # 42
d['bar'] = 'baz'
print(d.bar)  # 'baz'`
        },
        {
          id: 8,
          question: "Implement a decorator that registers all decorated classes in a global registry",
          difficulty: "Advanced",
          solutionHint: "Maintain a dictionary of decorated classes and add to it when decorating",
          codeExample: `class Registry:
    _classes = {}
    
    @classmethod
    def register(cls, name):
        def decorator(klass):
            cls._classes[name] = klass
            return klass
        return decorator
    
    @classmethod
    def get_class(cls, name):
        return cls._classes.get(name)

@Registry.register('user')
class User:
    pass

@Registry.register('product')
class Product:
    pass

print(Registry._classes)  # {'user': <class '__main__.User'>, 'product': <class '__main__.Product'>}`
        },
        {
          id: 9,
          question: "Implement a function decorator that caches results based on a custom cache key function",
          difficulty: "Advanced",
          solutionHint: "Use the key function to generate cache keys and a dictionary for storage",
          codeExample: `def cache_by(key_func):
    def decorator(func):
        cache = {}
        
        def wrapper(*args, **kwargs):
            key = key_func(*args, **kwargs)
            if key not in cache:
                cache[key] = func(*args, **kwargs)
            return cache[key]
        
        return wrapper
    return decorator

def user_cache_key(user_id, _):
    return user_id

@cache_by(user_cache_key)
def get_user_details(user_id, db_connection):
    print(f"Fetching user {user_id} from DB")
    return {"id": user_id, "name": f"User{user_id}"}

print(get_user_details(1, "conn"))  # Fetches from DB
print(get_user_details(1, "different_conn"))  # Returns cached result`
        },
        {
          id: 10,
          question: "Implement a context manager that temporarily modifies environment variables",
          difficulty: "Advanced",
          solutionHint: "Backup original environment in __enter__ and restore in __exit__",
          codeExample: `import os
from contextlib import contextmanager

@contextmanager
def modified_environ(**changes):
    original = os.environ.copy()
    
    try:
        os.environ.update(changes)
        yield
    finally:
        os.environ.clear()
        os.environ.update(original)

with modified_environ(TEST_MODE="1", DEBUG="true"):
    print(os.environ.get('TEST_MODE'))  # "1"
    print(os.environ.get('DEBUG'))     # "true"

print(os.environ.get('TEST_MODE'))  # None`
        }
      ]
    },
    performance: {
      name: "Performance Optimization",
      questions: [
        {
          id: 1,
          question: "Optimize a function that calculates Fibonacci numbers using memoization",
          difficulty: "Advanced",
          solutionHint: "Use functools.lru_cache decorator",
          codeExample: `import functools

@functools.lru_cache(maxsize=None)
def fib(n):
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)

print(fib(100))  # Computes instantly due to memoization`
        },
        {
          id: 2,
          question: "Implement a faster string concatenation for large numbers of strings",
          difficulty: "Advanced",
          solutionHint: "Use str.join() with a generator expression",
          codeExample: `def concatenate_strings(strings):
    return ''.join(strings)

# Test with large number of strings
strings = [str(i) for i in range(100000)]
result = concatenate_strings(strings)`
        },
        {
          id: 3,
          question: "Optimize a matrix multiplication function using NumPy",
          difficulty: "Advanced",
          solutionHint: "Convert lists to NumPy arrays and use built-in operations",
          codeExample: `import numpy as np

def matrix_mult(a, b):
    a_np = np.array(a)
    b_np = np.array(b)
    return np.dot(a_np, b_np)

# Large matrices
a = np.random.rand(100, 100)
b = np.random.rand(100, 100)
result = matrix_mult(a, b)`
        },
        {
          id: 4,
          question: "Implement a faster prime number generator using the Sieve of Eratosthenes",
          difficulty: "Advanced",
          solutionHint: "Use a boolean array to mark non-primes",
          codeExample: `import numpy as np

def primes_up_to(n):
    sieve = np.ones(n+1, dtype=bool)
    sieve[0:2] = False
    for i in range(2, int(n**0.5) + 1):
        if sieve[i]:
            sieve[i*i::i] = False
    return np.nonzero(sieve)[0]

print(primes_up_to(1000000))`
        },
        {
          id: 5,
          question: "Optimize a data processing pipeline using generators",
          difficulty: "Advanced",
          solutionHint: "Process data in chunks using yield",
          codeExample: `def process_large_file(filename):
    with open(filename, 'r') as f:
        for line in f:
            # Process each line without loading entire file
            processed = line.strip().upper()
            yield processed

# Usage
for processed_line in process_large_file('huge_file.txt'):
    # Do something with each line
    pass`
        },
        {
          id: 6,
          question: "Implement a faster dictionary lookup with custom hashing",
          difficulty: "Advanced",
          solutionHint: "Use __hash__ and __eq__ methods for custom objects",
          codeExample: `class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __hash__(self):
        return hash((self.x, self.y))
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# Faster lookups with proper hashing
points = {Point(1, 2): 'A', Point(3, 4): 'B'}
print(points.get(Point(1, 2)))  # 'A'`
        },
        {
          id: 7,
          question: "Optimize a numerical computation loop using Cython",
          difficulty: "Advanced",
          solutionHint: "Add static type declarations and compile with Cython",
          codeExample: `# Save as primes.pyx and compile with Cython
def primes(int kmax):
    cdef int n, k, i
    cdef int p[1000]  # Static array
    result = []
    
    if kmax > 1000:
        kmax = 1000
    
    k = 0
    n = 2
    while k < kmax:
        i = 0
        while i < k and n % p[i] != 0:
            i += 1
        if i == k:
            p[k] = n
            k += 1
            result.append(n)
        n += 1
    return result`
        },
        {
          id: 8,
          question: "Implement a memory-efficient data structure for large datasets",
          difficulty: "Advanced",
          solutionHint: "Use __slots__ to reduce memory usage",
          codeExample: `class EfficientData:
    __slots__ = ['x', 'y', 'z']  # Fixed attribute names
    
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z

# Uses less memory than regular class
data = [EfficientData(i, i+1, i+2) for i in range(1000000)]`
        },
        {
          id: 9,
          question: "Optimize a pandas DataFrame operation using vectorization",
          difficulty: "Advanced",
          solutionHint: "Avoid apply() and use built-in vectorized operations",
          codeExample: `import pandas as pd
import numpy as np

# Slow version
# df['new_col'] = df['col'].apply(lambda x: x * 2 + 5)

# Fast vectorized version
df = pd.DataFrame({'col': np.random.rand(1000000)})
df['new_col'] = df['col'] * 2 + 5`
        },
        {
          id: 10,
          question: "Implement a JIT-compiled function using Numba",
          difficulty: "Advanced",
          solutionHint: "Use @numba.jit decorator on numerical functions",
          codeExample: `from numba import jit
import numpy as np

@jit(nopython=True)
def monte_carlo_pi(n_samples):
    acc = 0
    for _ in range(n_samples):
        x = np.random.random()
        y = np.random.random()
        if (x**2 + y**2) < 1.0:
            acc += 1
    return 4.0 * acc / n_samples

print(monte_carlo_pi(1000000))`
        }
      ]
    },
    extensions: {
      name: "C Extensions",
      questions: [
        {
          id: 1,
          question: "Create a simple Python C extension module",
          difficulty: "Advanced",
          solutionHint: "Use Python C API and setup.py for compilation",
          codeExample: `/* simple.c */
#include <Python.h>

static PyObject* hello(PyObject* self, PyObject* args) {
    return PyUnicode_FromString("Hello from C extension!");
}

static PyMethodDef methods[] = {
    {"hello", hello, METH_NOARGS, "Say hello"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "simple",
    NULL,
    -1,
    methods
};

PyMODINIT_FUNC PyInit_simple(void) {
    return PyModule_Create(&module);
}

# setup.py
from distutils.core import setup, Extension
module = Extension('simple', sources=['simple.c'])
setup(name='Simple', version='1.0', ext_modules=[module])`
        },
        {
          id: 2,
          question: "Implement a C extension that processes NumPy arrays efficiently",
          difficulty: "Advanced",
          solutionHint: "Use NumPy C API for array access",
          codeExample: `/* numpy_ext.c */
#define NPY_NO_DEPRECATED_API NPY_1_7_API_VERSION
#include <Python.h>
#include <numpy/arrayobject.h>

static PyObject* sum_array(PyObject* self, PyObject* args) {
    PyArrayObject *arr;
    if (!PyArg_ParseTuple(args, "O!", &PyArray_Type, &arr)) return NULL;
    
    if (PyArray_TYPE(arr) != NPY_DOUBLE) {
        PyErr_SetString(PyExc_TypeError, "Array must be of type double");
        return NULL;
    }
    
    double *data = (double*)PyArray_DATA(arr);
    npy_intp size = PyArray_SIZE(arr);
    double sum = 0.0;
    
    for (npy_intp i = 0; i < size; i++) {
        sum += data[i];
    }
    
    return PyFloat_FromDouble(sum);
}

static PyMethodDef methods[] = {
    {"sum_array", sum_array, METH_VARARGS, "Sum array elements"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "numpy_ext",
    NULL,
    -1,
    methods
};

PyMODINIT_FUNC PyInit_numpy_ext(void) {
    import_array();
    return PyModule_Create(&module);
}`
        },
        {
          id: 3,
          question: "Create a Cython wrapper for a C library function",
          difficulty: "Advanced",
          solutionHint: "Use cdef extern to declare C functions",
          codeExample: `# math_wrapper.pyx
cdef extern from "math.h":
    double sin(double x)
    double cos(double x)

def py_sin(x):
    return sin(x)

def py_cos(x):
    return cos(x)

# setup.py
from distutils.core import setup
from Cython.Build import cythonize

setup(ext_modules=cythonize("math_wrapper.pyx"))`
        },
        {
          id: 4,
          question: "Implement a C extension with custom exception handling",
          difficulty: "Advanced",
          solutionHint: "Use PyErr_SetString to raise exceptions from C",
          codeExample: `/* exception_ext.c */
#include <Python.h>

static PyObject* divide(PyObject* self, PyObject* args) {
    double a, b;
    if (!PyArg_ParseTuple(args, "dd", &a, &b)) return NULL;
    
    if (b == 0.0) {
        PyErr_SetString(PyExc_ZeroDivisionError, "division by zero");
        return NULL;
    }
    
    return PyFloat_FromDouble(a / b);
}

static PyMethodDef methods[] = {
    {"divide", divide, METH_VARARGS, "Divide two numbers"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "exception_ext",
    NULL,
    -1,
    methods
};

PyMODINIT_FUNC PyInit_exception_ext(void) {
    return PyModule_Create(&module);
}`
        },
        {
          id: 5,
          question: "Create a Cython class with cdef methods for performance",
          difficulty: "Advanced",
          solutionHint: "Use cdef for private methods and cpdef for public ones",
          codeExample: `# primes.pyx
cdef class PrimeFinder:
    cdef int max_prime
    cdef bint *sieve
    
    def __cinit__(self, int max_prime):
        self.max_prime = max_prime
        self.sieve = <bint*>malloc((max_prime + 1) * sizeof(bint))
        if not self.sieve:
            raise MemoryError()
        
        # Sieve of Eratosthenes
        cdef int i, j
        for i in range(2, max_prime + 1):
            self.sieve[i] = 1
        
        for i in range(2, int(max_prime**0.5) + 1):
            if self.sieve[i]:
                for j in range(i*i, max_prime + 1, i):
                    self.sieve[j] = 0
    
    cpdef bint is_prime(self, int n):
        if n < 2 or n > self.max_prime:
            return False
        return self.sieve[n]
    
    def __dealloc__(self):
        if self.sieve:
            free(self.sieve)`
        },
        {
          id: 6,
          question: "Implement a C extension that returns a Python list",
          difficulty: "Advanced",
          solutionHint: "Use PyList_New and PyList_SetItem",
          codeExample: `/* list_ext.c */
#include <Python.h>

static PyObject* make_range(PyObject* self, PyObject* args) {
    int n;
    if (!PyArg_ParseTuple(args, "i", &n)) return NULL;
    
    PyObject *list = PyList_New(n);
    if (!list) return NULL;
    
    for (int i = 0; i < n; i++) {
        PyObject *num = PyLong_FromLong(i);
        if (!num) {
            Py_DECREF(list);
            return NULL;
        }
        PyList_SET_ITEM(list, i, num);
    }
    
    return list;
}

static PyMethodDef methods[] = {
    {"make_range", make_range, METH_VARARGS, "Create a range list"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "list_ext",
    NULL,
    -1,
    methods
};

PyMODINIT_FUNC PyInit_list_ext(void) {
    return PyModule_Create(&module);
}`
        },
        {
          id: 7,
          question: "Create a Cython function that accepts and returns NumPy arrays",
          difficulty: "Advanced",
          solutionHint: "Use memoryviews for efficient array access",
          codeExample: `# cython_array.pyx
import numpy as np
cimport numpy as np

def process_array(np.ndarray[np.double_t, ndim=2] arr):
    cdef Py_ssize_t i, j
    cdef double[:, :] arr_view = arr
    cdef double total = 0.0
    
    for i in range(arr_view.shape[0]):
        for j in range(arr_view.shape[1]):
            total += arr_view[i, j]
    
    return total

# setup.py
from distutils.core import setup
from Cython.Build import cythonize
import numpy

setup(
    ext_modules=cythonize("cython_array.pyx"),
    include_dirs=[numpy.get_include()]
)`
        },
        {
          id: 8,
          question: "Implement a C extension with thread-safe operations",
          difficulty: "Advanced",
          solutionHint: "Use Python's GIL management macros",
          codeExample: `/* thread_ext.c */
#include <Python.h>
#include <pthread.h>

static PyObject* thread_func(PyObject* self, PyObject* args) {
    Py_BEGIN_ALLOW_THREADS
    // Expensive computation without GIL
    sleep(1);
    Py_END_ALLOW_THREADS
    
    return PyLong_FromLong(42);
}

static PyMethodDef methods[] = {
    {"thread_func", thread_func, METH_NOARGS, "Thread-safe function"},
    {NULL, NULL, 0, NULL}
};

static struct PyModuleDef module = {
    PyModuleDef_HEAD_INIT,
    "thread_ext",
    NULL,
    -1,
    methods
};

PyMODINIT_FUNC PyInit_thread_ext(void) {
    return PyModule_Create(&module);
}`
        },
        {
          id: 9,
          question: "Create a Cython extension that wraps a C++ class",
          difficulty: "Advanced",
          solutionHint: "Use extern from with C++ namespace and cdef cppclass",
          codeExample: `# cpp_wrapper.pyx
# distutils: language = c++

cdef extern from "example.hpp" namespace "example":
    cdef cppclass Calculator:
        Calculator() except +
        int add(int a, int b)
        int multiply(int a, int b)

cdef class PyCalculator:
    cdef Calculator *thisptr
    
    def __cinit__(self):
        self.thisptr = new Calculator()
    
    def __dealloc__(self):
        del self.thisptr
    
    def add(self, a, b):
        return self.thisptr.add(a, b)
    
    def multiply(self, a, b):
        return self.thisptr.multiply(a, b)`
        },
        {
          id: 10,
          question: "Implement a C extension that creates a custom Python type",
          difficulty: "Advanced",
          solutionHint: "Define a PyTypeObject structure and implement type methods",
          codeExample: `/* custom_type.c */
#include <Python.h>

typedef struct {
    PyObject_HEAD
    int value;
} CounterObject;

static PyObject* Counter_new(PyTypeObject *type, PyObject *args, PyObject *kwds) {
    CounterObject *self;
    self = (CounterObject*)type->tp_alloc(type, 0);
    if (self) {
        self->value = 0;
    }
    return (PyObject*)self;
}

static int Counter_init(CounterObject *self, PyObject *args, PyObject *kwds) {
    if (!PyArg_ParseTuple(args, "|i", &self->value)) {
        return -1;
    }
    return 0;
}

static PyObject* Counter_increment(CounterObject *self, PyObject *args) {
    int inc = 1;
    if (!PyArg_ParseTuple(args, "|i", &inc)) return NULL;
    self->value += inc;
    Py_RETURN_NONE;
}

static PyObject* Counter_get_value(CounterObject *self, void *closure) {
    return PyLong_FromLong(self->value);
}

static PyMethodDef Counter_methods[] = {
    {"increment", (PyCFunction)Counter_increment, METH_VARARGS, "Increment counter"},
    {NULL, NULL, 0, NULL}
};

static PyTypeObject CounterType = {
    PyVarObject_HEAD_INIT(NULL, 0)
    .tp_name = "counter.Counter",
    .tp_doc = "Counter objects",
    .tp_basicsize = sizeof(CounterObject),
    .tp_itemsize = 0,
    .tp_flags = Py_TPFLAGS_DEFAULT,
    .tp_new = Counter_new,
    .tp_init = (initproc)Counter_init,
    .tp_methods = Counter_methods,
};

static struct PyModuleDef countermodule = {
    PyModuleDef_HEAD_INIT,
    .m_name = "counter",
    .m_doc = "Example module with custom type",
    .m_size = -1,
};

PyMODINIT_FUNC PyInit_counter(void) {
    PyObject *m;
    if (PyType_Ready(&CounterType) < 0) return NULL;
    
    m = PyModule_Create(&countermodule);
    if (m == NULL) return NULL;
    
    Py_INCREF(&CounterType);
    if (PyModule_AddObject(m, "Counter", (PyObject*)&CounterType) < 0) {
        Py_DECREF(&CounterType);
        Py_DECREF(m);
        return NULL;
    }
    
    return m;
}`
        }
      ]
    },
    testing: {
      name: "Testing & Debugging",
      questions: [
        {
          id: 1,
          question: "Implement a unit test for a function using unittest module",
          difficulty: "Advanced",
          solutionHint: "Create a test class inheriting from unittest.TestCase",
          codeExample: `import unittest

def add(a, b):
    return a + b

class TestAddFunction(unittest.TestCase):
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)
    
    def test_add_negative(self):
        self.assertEqual(add(-1, -1), -2)
    
    def test_add_zero(self):
        self.assertEqual(add(0, 0), 0)

if __name__ == "__main__":
    unittest.main()`
        },
        {
          id: 2,
          question: "Create a fixture for database testing using pytest",
          difficulty: "Advanced",
          solutionHint: "Use pytest.fixture decorator for setup/teardown",
          codeExample: `import pytest
import sqlite3

@pytest.fixture
def db_connection():
    conn = sqlite3.connect(":memory:")
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
    cursor.execute("INSERT INTO users (name) VALUES ('Alice'), ('Bob')")
    conn.commit()
    yield conn
    conn.close()

def test_user_count(db_connection):
    cursor = db_connection.cursor()
    cursor.execute("SELECT COUNT(*) FROM users")
    count = cursor.fetchone()[0]
    assert count == 2`
        },
        {
          id: 3,
          question: "Implement a mock for an external API call using unittest.mock",
          difficulty: "Advanced",
          solutionHint: "Use unittest.mock.patch to replace the real API call",
          codeExample: `from unittest.mock import patch
import requests

def get_user_name(user_id):
    response = requests.get(f"https://api.example.com/users/{user_id}")
    return response.json()['name']

def test_get_user_name():
    mock_response = {'name': 'Mock User'}
    with patch('requests.get') as mock_get:
        mock_get.return_value.json.return_value = mock_response
        name = get_user_name(1)
        assert name == 'Mock User'`
        },
        {
          id: 4,
          question: "Create a parameterized test for multiple input cases",
          difficulty: "Advanced",
          solutionHint: "Use pytest.mark.parametrize decorator",
          codeExample: `import pytest

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

@pytest.mark.parametrize("number, expected", [
    (2, True),
    (3, True),
    (4, False),
    (17, True),
    (25, False),
])
def test_is_prime(number, expected):
    assert is_prime(number) == expected`
        },
        {
          id: 5,
          question: "Implement a test that checks for raised exceptions",
          difficulty: "Advanced",
          solutionHint: "Use pytest.raises context manager",
          codeExample: `import pytest

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def test_divide_by_zero():
    with pytest.raises(ValueError, match="Cannot divide by zero"):
        divide(10, 0)`
        },
        {
          id: 6,
          question: "Create a debug decorator that prints function execution details",
          difficulty: "Advanced",
          solutionHint: "Use inspect module to get function information",
          codeExample: `import inspect
import time

def debug(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args={args}, kwargs={kwargs}")
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} returned {result} in {end-start:.4f}s")
        return result
    return wrapper

@debug
def factorial(n):
    if n < 2:
        return 1
    return n * factorial(n-1)

factorial(5)`
        },
        {
          id: 7,
          question: "Implement a test that verifies logging output",
          difficulty: "Advanced",
          solutionHint: "Use unittest.mock to capture log messages",
          codeExample: `import logging
from unittest.mock import patch

def process_data(data):
    logger = logging.getLogger(__name__)
    logger.info("Processing data")
    try:
        result = data * 2
        logger.debug(f"Result: {result}")
        return result
    except Exception as e:
        logger.error(f"Error: {e}")
        raise

def test_process_data_logging():
    with patch.object(logging.getLogger(__name__), 'info') as mock_info, \\
         patch.object(logging.getLogger(__name__), 'debug') as mock_debug:
        process_data(5)
        mock_info.assert_called_once_with("Processing data")
        mock_debug.assert_called_once_with("Result: 10")`
        },
        {
          id: 8,
          question: "Create a performance benchmark test using pytest-benchmark",
          difficulty: "Advanced",
          solutionHint: "Use pytest-benchmark fixture to measure execution time",
          codeExample: `def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

def test_fibonacci_performance(benchmark):
    result = benchmark(fibonacci, 30)
    assert result == 832040`
        },
        {
          id: 9,
          question: "Implement a test that verifies HTTP requests using responses library",
          difficulty: "Advanced",
          solutionHint: "Use responses to mock HTTP requests",
          codeExample: `import responses
import requests

@responses.activate
def test_api_call():
    responses.add(
        responses.GET,
        'https://api.example.com/data',
        json={'key': 'value'},
        status=200
    )
    
    response = requests.get('https://api.example.com/data')
    assert response.status_code == 200
    assert response.json() == {'key': 'value'}`
        },
        {
          id: 10,
          question: "Create a test that verifies database transactions are rolled back on failure",
          difficulty: "Advanced",
          solutionHint: "Use pytest with a database fixture that supports rollback",
          codeExample: `import pytest
import sqlite3

@pytest.fixture
def db():
    conn = sqlite3.connect(":memory:")
    conn.execute("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)")
    yield conn
    conn.close()

def test_transaction_rollback(db):
    # Successful insert
    db.execute("INSERT INTO users (name) VALUES ('Alice')")
    
    # This should fail and rollback
    with pytest.raises(sqlite3.IntegrityError):
        db.execute("INSERT INTO users (id, name) VALUES (1, 'Bob')")  # Duplicate ID
    
    # Verify only Alice is in the database
    count = db.execute("SELECT COUNT(*) FROM users").fetchone()[0]
    assert count == 1`
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
        <h1>Advanced Python Practice Questions</h1>
        
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

export default PracticeAdvancedPython;