import React, { useState, useEffect } from 'react';

const PracticeCore = () => {
  // State for active topic
  const [activeTopic, setActiveTopic] = useState('basics');
  
  // State for showing/hiding solutions
  const [showSolutions, setShowSolutions] = useState({});
  
  // State for code examples visibility
  const [showCodeExamples, setShowCodeExamples] = useState({});
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Core Java topics and questions (expanded to at least 10 per category)
  const topics = {
       basics: {
      name: "Java Basics",
      questions: [
        {
          id: 1,
          question: "Write a Java program to print 'Hello World'.",
          difficulty: "Beginner",
          solutionHint: "Use System.out.println() method.",
          codeExample: `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
        },
        {
          id: 2,
          question: "Create a program that takes user input and prints it back to the console.",
          difficulty: "Beginner",
          solutionHint: "Use Scanner class to read input from System.in.",
          codeExample: `import java.util.Scanner;

public class UserInput {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter your name: ");
    String name = scanner.nextLine();
    System.out.println("Hello, " + name);
  }
}`
        },
        {
          id: 3,
          question: "Write a program to add two numbers and display the result.",
          difficulty: "Beginner",
          solutionHint: "Declare two variables, add them, and print the result.",
          codeExample: `public class AddNumbers {
  public static void main(String[] args) {
    int num1 = 5, num2 = 10;
    int sum = num1 + num2;
    System.out.println("Sum: " + sum);
  }
}`
        },
        {
          id: 4,
          question: "Create a program to check if a number is even or odd.",
          difficulty: "Beginner",
          solutionHint: "Use the modulus operator % to check for remainder.",
          codeExample: `import java.util.Scanner;

public class EvenOdd {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int num = scanner.nextInt();
    
    if(num % 2 == 0) {
      System.out.println(num + " is even");
    } else {
      System.out.println(num + " is odd");
    }
  }
}`
        },
        {
          id: 5,
          question: "Write a program to find the largest of three numbers.",
          difficulty: "Beginner",
          solutionHint: "Use nested if-else statements or logical operators.",
          codeExample: `public class LargestNumber {
  public static void main(String[] args) {
    int a = 10, b = 20, c = 15;
    int largest = a;
    
    if(b > largest) largest = b;
    if(c > largest) largest = c;
    
    System.out.println("Largest number is: " + largest);
  }
}`
        },
        {
          id: 6,
          question: "Create a program to calculate the factorial of a number.",
          difficulty: "Beginner",
          solutionHint: "Use a loop to multiply numbers from 1 to n.",
          codeExample: `import java.util.Scanner;

public class Factorial {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int num = scanner.nextInt();
    long factorial = 1;
    
    for(int i = 1; i <= num; i++) {
      factorial *= i;
    }
    
    System.out.println("Factorial of " + num + " is: " + factorial);
  }
}`
        },
        {
          id: 7,
          question: "Write a program to display the Fibonacci series up to a given number.",
          difficulty: "Beginner",
          solutionHint: "Initialize first two numbers and use a loop to generate subsequent numbers.",
          codeExample: `import java.util.Scanner;

public class Fibonacci {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter the limit: ");
    int limit = scanner.nextInt();
    
    int a = 0, b = 1;
    System.out.print(a + " " + b);
    
    while(a + b <= limit) {
      int c = a + b;
      System.out.print(" " + c);
      a = b;
      b = c;
    }
  }
}`
        },
        {
          id: 8,
          question: "Create a program to check if a number is prime.",
          difficulty: "Beginner",
          solutionHint: "Check divisibility from 2 to square root of the number.",
          codeExample: `import java.util.Scanner;

public class PrimeCheck {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter a number: ");
    int num = scanner.nextInt();
    boolean isPrime = true;
    
    if(num <= 1) {
      isPrime = false;
    } else {
      for(int i = 2; i <= Math.sqrt(num); i++) {
        if(num % i == 0) {
          isPrime = false;
          break;
        }
      }
    }
    
    System.out.println(num + (isPrime ? " is prime" : " is not prime"));
  }
}`
        },
        {
          id: 9,
          question: "Write a program to reverse a string.",
          difficulty: "Beginner",
          solutionHint: "Use StringBuilder's reverse() method or loop through characters.",
          codeExample: `public class ReverseString {
  public static void main(String[] args) {
    String str = "Hello World";
    String reversed = new StringBuilder(str).reverse().toString();
    System.out.println("Reversed string: " + reversed);
  }
}`
        },
        {
          id: 10,
          question: "Create a program to find the sum of all elements in an array.",
          difficulty: "Beginner",
          solutionHint: "Use a loop to iterate through array elements and accumulate the sum.",
          codeExample: `public class ArraySum {
  public static void main(String[] args) {
    int[] numbers = {5, 10, 15, 20, 25};
    int sum = 0;
    
    for(int num : numbers) {
      sum += num;
    }
    
    System.out.println("Sum of array elements: " + sum);
  }
}`
        }
      ]
    },
    oop: {
      name: "OOP Concepts",
      questions: [
        {
          id: 1,
          question: "Create a class 'Person' with properties name and age, with getters and setters.",
          difficulty: "Beginner",
          solutionHint: "Use private fields with public getter and setter methods.",
          codeExample: `public class Person {
  private String name;
  private int age;
  
  public String getName() { return name; }
  public void setName(String name) { this.name = name; }
  
  public int getAge() { return age; }
  public void setAge(int age) { this.age = age; }
}`
        },
        {
          id: 2,
          question: "Implement inheritance by creating 'Student' class that extends 'Person' with additional property 'studentId'.",
          difficulty: "Intermediate",
          solutionHint: "Use 'extends' keyword and call superclass constructor if needed.",
          codeExample: `public class Student extends Person {
  private String studentId;
  
  public String getStudentId() { return studentId; }
  public void setStudentId(String studentId) { this.studentId = studentId; }
}`
        },
        {
          id: 3,
          question: "Create an interface 'Drawable' with a method 'draw()' and implement it in a class 'Circle'.",
          difficulty: "Intermediate",
          solutionHint: "Use 'interface' keyword and 'implements' for implementation.",
          codeExample: `interface Drawable {
  void draw();
}

class Circle implements Drawable {
  public void draw() {
    System.out.println("Drawing a circle");
  }
}`
        },
        {
          id: 4,
          question: "Implement polymorphism with a base class 'Shape' and derived classes 'Rectangle' and 'Triangle'.",
          difficulty: "Intermediate",
          solutionHint: "Create a method in base class and override it in derived classes.",
          codeExample: `class Shape {
  void draw() {
    System.out.println("Drawing a shape");
  }
}

class Rectangle extends Shape {
  @Override
  void draw() {
    System.out.println("Drawing a rectangle");
  }
}

class Triangle extends Shape {
  @Override
  void draw() {
    System.out.println("Drawing a triangle");
  }
}`
        },
        {
          id: 5,
          question: "Create an abstract class 'Animal' with abstract method 'makeSound()' and concrete subclasses.",
          difficulty: "Intermediate",
          solutionHint: "Use 'abstract' keyword for class and method, implement in subclasses.",
          codeExample: `abstract class Animal {
  abstract void makeSound();
}

class Dog extends Animal {
  void makeSound() {
    System.out.println("Bark");
  }
}

class Cat extends Animal {
  void makeSound() {
    System.out.println("Meow");
  }
}`
        },
        {
          id: 6,
          question: "Implement encapsulation by creating a fully encapsulated class 'BankAccount'.",
          difficulty: "Beginner",
          solutionHint: "Make all fields private and provide public getters/setters.",
          codeExample: `public class BankAccount {
  private String accountNumber;
  private double balance;
  
  public String getAccountNumber() { return accountNumber; }
  public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
  
  public double getBalance() { return balance; }
  public void deposit(double amount) { balance += amount; }
  public void withdraw(double amount) { 
    if(amount <= balance) balance -= amount; 
  }
}`
        },
        {
          id: 7,
          question: "Create a program demonstrating method overloading in a class 'Calculator'.",
          difficulty: "Beginner",
          solutionHint: "Define multiple methods with same name but different parameters.",
          codeExample: `class Calculator {
  int add(int a, int b) { return a + b; }
  double add(double a, double b) { return a + b; }
  int add(int a, int b, int c) { return a + b + c; }
}`
        },
        {
          id: 8,
          question: "Implement a singleton class 'DatabaseConnection'.",
          difficulty: "Intermediate",
          solutionHint: "Use private constructor and static method to get instance.",
          codeExample: `public class DatabaseConnection {
  private static DatabaseConnection instance;
  
  private DatabaseConnection() {}
  
  public static DatabaseConnection getInstance() {
    if(instance == null) {
      instance = new DatabaseConnection();
    }
    return instance;
  }
}`
        },
        {
          id: 9,
          question: "Create a program demonstrating the 'final' keyword with variables, methods, and class.",
          difficulty: "Intermediate",
          solutionHint: "Use 'final' for constant variables, non-overridable methods, and non-inheritable classes.",
          codeExample: `final class Constants {
  final double PI = 3.14159;
  
  final void displayPI() {
    System.out.println("PI value: " + PI);
  }
}`
        },
        {
          id: 10,
          question: "Implement composition by creating a 'Car' class that contains 'Engine' and 'Wheel' objects.",
          difficulty: "Intermediate",
          solutionHint: "Create classes for components and include them as fields in the main class.",
          codeExample: `class Engine {
  void start() { System.out.println("Engine started"); }
}

class Wheel {
  void rotate() { System.out.println("Wheel rotating"); }
}

class Car {
  private Engine engine = new Engine();
  private Wheel[] wheels = new Wheel[4];
  
  Car() {
    for(int i = 0; i < 4; i++) {
      wheels[i] = new Wheel();
    }
  }
  
  void drive() {
    engine.start();
    for(Wheel wheel : wheels) {
      wheel.rotate();
    }
  }
}`
        }
      ]
    },
    arrays: {
      name: "Arrays",
      questions: [
        {
          id: 1,
          question: "Find the maximum element in an array",
          difficulty: "Beginner",
          solutionHint: "Initialize max with first element, then compare with others",
          codeExample: `public class MaxInArray {
  public static void main(String[] args) {
    int[] arr = {5, 2, 9, 1, 5, 6};
    int max = arr[0];
    for (int num : arr) {
      if (num > max) max = num;
    }
    System.out.println("Max: " + max);
  }
}`
        },
        {
          id: 2,
          question: "Reverse an array in-place",
          difficulty: "Beginner",
          solutionHint: "Swap elements from start and end moving towards center",
          codeExample: `public class ReverseArray {
  public static void main(String[] args) {
    int[] arr = {1, 2, 3, 4, 5};
    for (int i = 0; i < arr.length/2; i++) {
      int temp = arr[i];
      arr[i] = arr[arr.length-1-i];
      arr[arr.length-1-i] = temp;
    }
    System.out.println(Arrays.toString(arr));
  }
}`
        },
        {
          id: 3,
          question: "Find the second largest element in an array",
          difficulty: "Intermediate",
          solutionHint: "Track both largest and second largest while iterating",
          codeExample: `public class SecondLargest {
  public static void main(String[] args) {
    int[] arr = {12, 35, 1, 10, 34, 1};
    int first = Integer.MIN_VALUE;
    int second = Integer.MIN_VALUE;
    
    for (int num : arr) {
      if (num > first) {
        second = first;
        first = num;
      } else if (num > second && num != first) {
        second = num;
      }
    }
    System.out.println("Second largest: " + second);
  }
}`
        },
        {
          id: 4,
          question: "Remove duplicates from sorted array",
          difficulty: "Intermediate",
          solutionHint: "Use two pointers technique",
          codeExample: `public class RemoveDuplicates {
  public static int removeDuplicates(int[] nums) {
    if (nums.length == 0) return 0;
    int i = 0;
    for (int j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }
}`
        },
        {
          id: 5,
          question: "Rotate array by k positions",
          difficulty: "Intermediate",
          solutionHint: "Reverse the array in parts",
          codeExample: `public class RotateArray {
  public static void rotate(int[] nums, int k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
  }
  
  public static void reverse(int[] nums, int start, int end) {
    while (start < end) {
      int temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  }
}`
        },
        {
          id: 6,
          question: "Find the missing number in an array of 1 to n",
          difficulty: "Intermediate",
          solutionHint: "Use the sum formula or XOR operation",
          codeExample: `public class MissingNumber {
  public static int findMissing(int[] nums) {
    int n = nums.length;
    int expectedSum = n * (n + 1) / 2;
    int actualSum = 0;
    for (int num : nums) actualSum += num;
    return expectedSum - actualSum;
  }
}`
        },
        {
          id: 7,
          question: "Find all pairs in an array that sum to a given value",
          difficulty: "Intermediate",
          solutionHint: "Use a hash set to store complements",
          codeExample: `import java.util.HashSet;

public class PairSum {
  public static void findPairs(int[] nums, int target) {
    HashSet<Integer> set = new HashSet<>();
    for (int num : nums) {
      int complement = target - num;
      if (set.contains(complement)) {
        System.out.println(num + ", " + complement);
      }
      set.add(num);
    }
  }
}`
        },
        {
          id: 8,
          question: "Find the maximum subarray sum (Kadane's Algorithm)",
          difficulty: "Advanced",
          solutionHint: "Track current and maximum sum while iterating",
          codeExample: `public class MaxSubarray {
  public static int maxSubArray(int[] nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
}`
        },
        {
          id: 9,
          question: "Merge two sorted arrays",
          difficulty: "Intermediate",
          solutionHint: "Use three pointers technique",
          codeExample: `public class MergeSortedArrays {
  public static void merge(int[] nums1, int m, int[] nums2, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
      nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    
    while (j >= 0) {
      nums1[k--] = nums2[j--];
    }
  }
}`
        },
        {
          id: 10,
          question: "Find the duplicate number in an array",
          difficulty: "Intermediate",
          solutionHint: "Use Floyd's Tortoise and Hare algorithm",
          codeExample: `public class FindDuplicate {
  public static int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow != fast);
    
    slow = nums[0];
    while (slow != fast) {
      slow = nums[slow];
      fast = nums[fast];
    }
    return slow;
  }
}`
        }
      ]
    },
    strings: {
      name: "Strings",
      questions: [
        {
          id: 1,
          question: "Reverse a string",
          difficulty: "Beginner",
          solutionHint: "Convert to char array and swap characters",
          codeExample: `public class ReverseString {
  public static String reverse(String s) {
    char[] chars = s.toCharArray();
    int i = 0, j = chars.length - 1;
    while (i < j) {
      char temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
      i++;
      j--;
    }
    return new String(chars);
  }
}`
        },
        {
          id: 2,
          question: "Check if a string is palindrome",
          difficulty: "Beginner",
          solutionHint: "Compare characters from start and end",
          codeExample: `public class Palindrome {
  public static boolean isPalindrome(String s) {
    int i = 0, j = s.length() - 1;
    while (i < j) {
      if (s.charAt(i++) != s.charAt(j--)) {
        return false;
      }
    }
    return true;
  }
}`
        },
        {
          id: 3,
          question: "Find the first non-repeating character",
          difficulty: "Intermediate",
          solutionHint: "Use a frequency map or array",
          codeExample: `public class FirstUniqueChar {
  public static int firstUniqChar(String s) {
    int[] freq = new int[26];
    for (char c : s.toCharArray()) freq[c-'a']++;
    for (int i = 0; i < s.length(); i++) {
      if (freq[s.charAt(i)-'a'] == 1) return i;
    }
    return -1;
  }
}`
        },
        {
          id: 4,
          question: "Check if two strings are anagrams",
          difficulty: "Intermediate",
          solutionHint: "Compare character frequencies after sorting",
          codeExample: `public class Anagram {
  public static boolean isAnagram(String s, String t) {
    if (s.length() != t.length()) return false;
    int[] count = new int[26];
    for (char c : s.toCharArray()) count[c-'a']++;
    for (char c : t.toCharArray()) {
      if (--count[c-'a'] < 0) return false;
    }
    return true;
  }
}`
        },
        {
          id: 5,
          question: "Longest substring without repeating characters",
          difficulty: "Advanced",
          solutionHint: "Use sliding window technique with a Set",
          codeExample: `import java.util.*;

public class LongestSubstring {
  public static int lengthOfLongestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int max = 0, i = 0, j = 0;
    while (j < s.length()) {
      if (!set.contains(s.charAt(j))) {
        set.add(s.charAt(j++));
        max = Math.max(max, set.size());
      } else {
        set.remove(s.charAt(i++));
      }
    }
    return max;
  }
}`
        },
        {
          id: 6,
          question: "Count the number of vowels and consonants in a string",
          difficulty: "Beginner",
          solutionHint: "Check each character if it's a vowel",
          codeExample: `public class CountVowels {
  public static void count(String str) {
    int vowels = 0, consonants = 0;
    str = str.toLowerCase();
    for (int i = 0; i < str.length(); i++) {
      char ch = str.charAt(i);
      if (ch >= 'a' && ch <= 'z') {
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
          vowels++;
        } else {
          consonants++;
        }
      }
    }
    System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
  }
}`
        },
        {
          id: 7,
          question: "Check if a string is a valid shuffle of two other strings",
          difficulty: "Intermediate",
          solutionHint: "Check character counts and order",
          codeExample: `public class ValidShuffle {
  public static boolean isValid(String s1, String s2, String result) {
    if (s1.length() + s2.length() != result.length()) return false;
    
    int i = 0, j = 0, k = 0;
    while (k < result.length()) {
      if (i < s1.length() && s1.charAt(i) == result.charAt(k)) i++;
      else if (j < s2.length() && s2.charAt(j) == result.charAt(k)) j++;
      else return false;
      k++;
    }
    return true;
  }
}`
        },
        {
          id: 8,
          question: "Count and say problem",
          difficulty: "Intermediate",
          solutionHint: "Generate sequence by counting digits of previous term",
          codeExample: `public class CountAndSay {
  public static String countAndSay(int n) {
    if (n == 1) return "1";
    String prev = countAndSay(n - 1);
    StringBuilder result = new StringBuilder();
    
    int count = 1;
    for (int i = 1; i < prev.length(); i++) {
      if (prev.charAt(i) == prev.charAt(i - 1)) {
        count++;
      } else {
        result.append(count).append(prev.charAt(i - 1));
        count = 1;
      }
    }
    result.append(count).append(prev.charAt(prev.length() - 1));
    return result.toString();
  }
}`
        },
        {
          id: 9,
          question: "Find the longest palindromic substring",
          difficulty: "Advanced",
          solutionHint: "Expand around center for each character",
          codeExample: `public class LongestPalindrome {
  public static String longestPalindrome(String s) {
    if (s == null || s.length() < 1) return "";
    
    int start = 0, end = 0;
    for (int i = 0; i < s.length(); i++) {
      int len1 = expandAroundCenter(s, i, i);
      int len2 = expandAroundCenter(s, i, i + 1);
      int len = Math.max(len1, len2);
      if (len > end - start) {
        start = i - (len - 1) / 2;
        end = i + len / 2;
      }
    }
    return s.substring(start, end + 1);
  }
  
  private static int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
      left--;
      right++;
    }
    return right - left - 1;
  }
}`
        },
        {
          id: 10,
          question: "Implement regular expression matching",
          difficulty: "Advanced",
          solutionHint: "Use dynamic programming to handle patterns with '.' and '*'",
          codeExample: `public class RegexMatching {
  public static boolean isMatch(String s, String p) {
    boolean[][] dp = new boolean[s.length() + 1][p.length() + 1];
    dp[0][0] = true;
    
    for (int j = 1; j <= p.length(); j++) {
      if (p.charAt(j - 1) == '*') {
        dp[0][j] = dp[0][j - 2];
      }
    }
    
    for (int i = 1; i <= s.length(); i++) {
      for (int j = 1; j <= p.length(); j++) {
        if (p.charAt(j - 1) == '.' || p.charAt(j - 1) == s.charAt(i - 1)) {
          dp[i][j] = dp[i - 1][j - 1];
        } else if (p.charAt(j - 1) == '*') {
          dp[i][j] = dp[i][j - 2];
          if (p.charAt(j - 2) == '.' || p.charAt(j - 2) == s.charAt(i - 1)) {
            dp[i][j] = dp[i][j] || dp[i - 1][j];
          }
        }
      }
    }
    return dp[s.length()][p.length()];
  }
}`
        }
      ]
    },
    exceptions: {
      name: "Exception Handling",
      questions: [
        {
          id: 1,
          question: "Write a program that handles division by zero exception.",
          difficulty: "Beginner",
          solutionHint: "Use try-catch block to catch ArithmeticException.",
          codeExample: `public class Division {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;
    } catch (ArithmeticException e) {
      System.out.println("Cannot divide by zero");
    }
  }
}`
        },
        {
          id: 2,
          question: "Create a custom exception class 'InvalidAgeException' and use it in a program.",
          difficulty: "Intermediate",
          solutionHint: "Extend Exception class and throw your custom exception.",
          codeExample: `class InvalidAgeException extends Exception {
  InvalidAgeException(String message) {
    super(message);
  }
}

public class AgeValidator {
  static void validateAge(int age) throws InvalidAgeException {
    if(age < 18) {
      throw new InvalidAgeException("Age must be 18 or older");
    }
  }
  
  public static void main(String[] args) {
    try {
      validateAge(15);
    } catch(InvalidAgeException e) {
      System.out.println(e.getMessage());
    }
  }
}`
        },
        {
          id: 3,
          question: "Write a program demonstrating multiple catch blocks for different exceptions.",
          difficulty: "Beginner",
          solutionHint: "Handle different exception types with separate catch blocks.",
          codeExample: `public class MultipleCatch {
  public static void main(String[] args) {
    try {
      int[] numbers = new int[5];
      numbers[10] = 30 / 0;
    } catch(ArithmeticException e) {
      System.out.println("Arithmetic Exception");
    } catch(ArrayIndexOutOfBoundsException e) {
      System.out.println("Array Index Out Of Bounds Exception");
    } catch(Exception e) {
      System.out.println("Generic Exception");
    }
  }
}`
        },
        {
          id: 4,
          question: "Implement a program with try-catch-finally block showing finally always executes.",
          difficulty: "Beginner",
          solutionHint: "Use finally block for cleanup code that should always run.",
          codeExample: `public class FinallyDemo {
  public static void main(String[] args) {
    try {
      int result = 10 / 2;
      System.out.println("Result: " + result);
    } catch(ArithmeticException e) {
      System.out.println("Division by zero");
    } finally {
      System.out.println("This will always execute");
    }
  }
}`
        },
        {
          id: 5,
          question: "Create a program demonstrating the use of 'throws' keyword in method signature.",
          difficulty: "Intermediate",
          solutionHint: "Declare exceptions that a method might throw using throws clause.",
          codeExample: `import java.io.*;

public class ThrowsExample {
  static void readFile() throws FileNotFoundException {
    File file = new File("nonexistent.txt");
    FileReader fr = new FileReader(file);
  }
  
  public static void main(String[] args) {
    try {
      readFile();
    } catch(FileNotFoundException e) {
      System.out.println("File not found: " + e.getMessage());
    }
  }
}`
        },
        {
          id: 6,
          question: "Write a program demonstrating exception propagation in method calls.",
          difficulty: "Intermediate",
          solutionHint: "Show how exceptions propagate up the call stack if not caught.",
          codeExample: `public class ExceptionPropagation {
  static void method1() {
    method2();
  }
  
  static void method2() {
    method3();
  }
  
  static void method3() {
    int result = 10 / 0;
  }
  
  public static void main(String[] args) {
    try {
      method1();
    } catch(ArithmeticException e) {
      System.out.println("Exception caught in main: " + e);
    }
  }
}`
        },
        {
          id: 7,
          question: "Create a program demonstrating the use of try-with-resources statement.",
          difficulty: "Intermediate",
          solutionHint: "Use AutoCloseable resources in try-with-resources block.",
          codeExample: `import java.io.*;

public class TryWithResources {
  public static void main(String[] args) {
    try(FileInputStream input = new FileInputStream("file.txt")) {
      int data = input.read();
      while(data != -1) {
        System.out.print((char) data);
        data = input.read();
      }
    } catch(IOException e) {
      System.out.println("Error reading file: " + e.getMessage());
    }
  }
}`
        },
        {
          id: 8,
          question: "Implement a program demonstrating the difference between checked and unchecked exceptions.",
          difficulty: "Intermediate",
          solutionHint: "Show examples of both types and how they're handled differently.",
          codeExample: `import java.io.*;

public class ExceptionTypes {
  // Checked exception (must be declared or handled)
  static void checkedExceptionExample() throws FileNotFoundException {
    FileReader file = new FileReader("nonexistent.txt");
  }
  
  // Unchecked exception (no need to declare)
  static void uncheckedExceptionExample() {
    int result = 10 / 0;
  }
  
  public static void main(String[] args) {
    // Handling checked exception
    try {
      checkedExceptionExample();
    } catch(FileNotFoundException e) {
      System.out.println("Checked exception: " + e.getMessage());
    }
    
    // Handling unchecked exception
    try {
      uncheckedExceptionExample();
    } catch(ArithmeticException e) {
      System.out.println("Unchecked exception: " + e.getMessage());
    }
  }
}`
        },
        {
          id: 9,
          question: "Write a program demonstrating nested try-catch blocks.",
          difficulty: "Intermediate",
          solutionHint: "Place one try-catch block inside another try block.",
          codeExample: `public class NestedTryCatch {
  public static void main(String[] args) {
    try {
      try {
        int[] numbers = new int[5];
        numbers[10] = 30;
      } catch(ArrayIndexOutOfBoundsException e) {
        System.out.println("Inner catch: Array index out of bounds");
      }
      
      int result = 10 / 0;
    } catch(ArithmeticException e) {
      System.out.println("Outer catch: Division by zero");
    }
  }
}`
        },
        {
          id: 10,
          question: "Create a program to handle multiple exceptions in a single catch block (Java 7+ feature).",
          difficulty: "Intermediate",
          solutionHint: "Use the pipe (|) operator to catch multiple exceptions in one block.",
          codeExample: `public class MultiCatch {
  public static void main(String[] args) {
    try {
      int[] numbers = new int[5];
      numbers[10] = 30 / 0;
    } catch(ArithmeticException | ArrayIndexOutOfBoundsException e) {
      System.out.println("Caught exception: " + e.getClass().getSimpleName());
    }
  }
}`
        }
      ]
    },
    collections: {
      name: "Collections Framework",
      questions: [
        {
          id: 1,
          question: "Create a program that stores a list of names using ArrayList and prints them.",
          difficulty: "Beginner",
          solutionHint: "Use ArrayList<String> and its add() method.",
          codeExample: `import java.util.ArrayList;

public class NameList {
  public static void main(String[] args) {
    ArrayList<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");
    
    for (String name : names) {
      System.out.println(name);
    }
  }
}`
        },
        {
          id: 2,
          question: "Implement a program demonstrating HashMap to store and retrieve key-value pairs.",
          difficulty: "Beginner",
          solutionHint: "Use HashMap<K,V> with put() and get() methods.",
          codeExample: `import java.util.HashMap;

public class HashMapDemo {
  public static void main(String[] args) {
    HashMap<String, Integer> ageMap = new HashMap<>();
    ageMap.put("Alice", 25);
    ageMap.put("Bob", 30);
    
    System.out.println("Alice's age: " + ageMap.get("Alice"));
  }
}`
        },
        {
          id: 3,
          question: "Write a program to sort a list of integers using Collections.sort().",
          difficulty: "Beginner",
          solutionHint: "Use Collections.sort() method on a List<Integer>.",
          codeExample: `import java.util.*;

public class SortList {
  public static void main(String[] args) {
    List<Integer> numbers = Arrays.asList(5, 2, 8, 1, 9);
    Collections.sort(numbers);
    System.out.println("Sorted list: " + numbers);
  }
}`
        },
        {
          id: 4,
          question: "Create a program demonstrating the difference between HashSet and TreeSet.",
          difficulty: "Intermediate",
          solutionHint: "Show that HashSet is unordered while TreeSet is sorted.",
          codeExample: `import java.util.*;

public class SetDemo {
  public static void main(String[] args) {
    Set<String> hashSet = new HashSet<>();
    Set<String> treeSet = new TreeSet<>();
    
    hashSet.add("Banana");
    hashSet.add("Apple");
    hashSet.add("Cherry");
    
    treeSet.add("Banana");
    treeSet.add("Apple");
    treeSet.add("Cherry");
    
    System.out.println("HashSet (unordered): " + hashSet);
    System.out.println("TreeSet (sorted): " + treeSet);
  }
}`
        },
        {
          id: 5,
          question: "Implement a program using LinkedList to demonstrate stack operations (push, pop, peek).",
          difficulty: "Intermediate",
          solutionHint: "Use LinkedList's addFirst(), removeFirst(), and getFirst() methods.",
          codeExample: `import java.util.LinkedList;

public class StackDemo {
  public static void main(String[] args) {
    LinkedList<String> stack = new LinkedList<>();
    stack.push("First");
    stack.push("Second");
    stack.push("Third");
    
    System.out.println("Top element: " + stack.peek());
    System.out.println("Popped: " + stack.pop());
    System.out.println("Stack after pop: " + stack);
  }
}`
        },
        {
          id: 6,
          question: "Write a program to find the frequency of each word in a string using HashMap.",
          difficulty: "Intermediate",
          solutionHint: "Split the string into words and count occurrences using HashMap.",
          codeExample: `import java.util.*;

public class WordFrequency {
  public static void main(String[] args) {
    String text = "hello world hello java world java programming";
    String[] words = text.split(" ");
    
    Map<String, Integer> frequencyMap = new HashMap<>();
    for(String word : words) {
      frequencyMap.put(word, frequencyMap.getOrDefault(word, 0) + 1);
    }
    
    System.out.println("Word frequencies: " + frequencyMap);
  }
}`
        },
        {
          id: 7,
          question: "Create a program demonstrating the use of Iterator to traverse a collection.",
          difficulty: "Beginner",
          solutionHint: "Use iterator() method and hasNext()/next() methods of Iterator.",
          codeExample: `import java.util.*;

public class IteratorDemo {
  public static void main(String[] args) {
    List<String> colors = Arrays.asList("Red", "Green", "Blue");
    Iterator<String> iterator = colors.iterator();
    
    while(iterator.hasNext()) {
      System.out.println(iterator.next());
    }
  }
}`
        },
        {
          id: 8,
          question: "Implement a program using PriorityQueue to demonstrate natural ordering.",
          difficulty: "Intermediate",
          solutionHint: "Elements in PriorityQueue are ordered according to their natural ordering.",
          codeExample: `import java.util.PriorityQueue;

public class PriorityQueueDemo {
  public static void main(String[] args) {
    PriorityQueue<Integer> pq = new PriorityQueue<>();
    pq.add(10);
    pq.add(5);
    pq.add(15);
    pq.add(3);
    
    while(!pq.isEmpty()) {
      System.out.println(pq.poll());
    }
  }
}`
        },
        {
          id: 9,
          question: "Write a program to convert an array to ArrayList and vice versa.",
          difficulty: "Beginner",
          solutionHint: "Use Arrays.asList() and toArray() methods.",
          codeExample: `import java.util.*;

public class ArrayConversion {
  public static void main(String[] args) {
    // Array to ArrayList
    String[] array = {"One", "Two", "Three"};
    List<String> list = new ArrayList<>(Arrays.asList(array));
    System.out.println("ArrayList: " + list);
    
    // ArrayList to Array
    String[] newArray = list.toArray(new String[0]);
    System.out.println("Array: " + Arrays.toString(newArray));
  }
}`
        },
        {
          id: 10,
          question: "Create a program demonstrating the use of Comparator to sort objects by different fields.",
          difficulty: "Intermediate",
          solutionHint: "Implement Comparator interface and override compare() method.",
          codeExample: `import java.util.*;

class Student {
  String name;
  int age;
  
  Student(String name, int age) {
    this.name = name;
    this.age = age;
  }
  
  public String toString() { return name + "(" + age + ")"; }
}

public class ComparatorDemo {
  public static void main(String[] args) {
    List<Student> students = Arrays.asList(
      new Student("Alice", 22),
      new Student("Bob", 20),
      new Student("Charlie", 21)
    );
    
    // Sort by name
    Collections.sort(students, (s1, s2) -> s1.name.compareTo(s2.name));
    System.out.println("Sorted by name: " + students);
    
    // Sort by age
    Collections.sort(students, (s1, s2) -> s1.age - s2.age);
    System.out.println("Sorted by age: " + students);
  }
}`
        }
      ]
    },
    multithreading: {
      name: "Multithreading",
      questions: [
        {
          id: 1,
          question: "Create a simple program that runs two threads printing numbers 1-5 each.",
          difficulty: "Intermediate",
          solutionHint: "Extend Thread class or implement Runnable interface.",
          codeExample: `class MyThread extends Thread {
  public void run() {
    for (int i = 1; i <= 5; i++) {
      System.out.println(Thread.currentThread().getName() + ": " + i);
    }
  }
}

public class ThreadDemo {
  public static void main(String[] args) {
    MyThread t1 = new MyThread();
    MyThread t2 = new MyThread();
    t1.start();
    t2.start();
  }
}`
        },
        {
          id: 2,
          question: "Implement a program demonstrating thread synchronization with synchronized method.",
          difficulty: "Intermediate",
          solutionHint: "Use synchronized keyword to make method thread-safe.",
          codeExample: `class Counter {
  private int count = 0;
  
  public synchronized void increment() {
    count++;
  }
  
  public int getCount() { return count; }
}

public class SynchronizedDemo {
  public static void main(String[] args) throws InterruptedException {
    Counter counter = new Counter();
    
    Thread t1 = new Thread(() -> {
      for(int i = 0; i < 1000; i++) counter.increment();
    });
    
    Thread t2 = new Thread(() -> {
      for(int i = 0; i < 1000; i++) counter.increment();
    });
    
    t1.start();
    t2.start();
    
    t1.join();
    t2.join();
    
    System.out.println("Final count: " + counter.getCount());
  }
}`
        },
        {
          id: 3,
          question: "Write a program demonstrating the use of wait() and notify() for inter-thread communication.",
          difficulty: "Advanced",
          solutionHint: "Use synchronized block with wait() and notify() methods.",
          codeExample: `class Message {
  private String message;
  private boolean empty = true;
  
  public synchronized String read() {
    while(empty) {
      try {
        wait();
      } catch(InterruptedException e) {}
    }
    empty = true;
    notifyAll();
    return message;
  }
  
  public synchronized void write(String message) {
    while(!empty) {
      try {
        wait();
      } catch(InterruptedException e) {}
    }
    empty = false;
    this.message = message;
    notifyAll();
  }
}

public class WaitNotifyDemo {
  public static void main(String[] args) {
    Message message = new Message();
    
    new Thread(() -> {
      String[] messages = {"Message 1", "Message 2", "Message 3"};
      for(String msg : messages) {
        message.write(msg);
        try { Thread.sleep(1000); } catch(InterruptedException e) {}
      }
      message.write("DONE");
    }).start();
    
    new Thread(() -> {
      for(String msg = message.read(); !msg.equals("DONE"); msg = message.read()) {
        System.out.println("Received: " + msg);
      }
    }).start();
  }
}`
        },
        {
          id: 4,
          question: "Create a program demonstrating the use of ExecutorService to manage a thread pool.",
          difficulty: "Advanced",
          solutionHint: "Use Executors.newFixedThreadPool() and submit tasks to it.",
          codeExample: `import java.util.concurrent.*;

public class ThreadPoolDemo {
  public static void main(String[] args) {
    ExecutorService executor = Executors.newFixedThreadPool(3);
    
    for(int i = 1; i <= 5; i++) {
      final int taskId = i;
      executor.submit(() -> {
        System.out.println("Task " + taskId + " executed by " + Thread.currentThread().getName());
      });
    }
    
    executor.shutdown();
  }
}`
        },
        {
          id: 5,
          question: "Implement a program demonstrating the use of Callable and Future to get return values from threads.",
          difficulty: "Advanced",
          solutionHint: "Use ExecutorService.submit() with Callable which returns Future.",
          codeExample: `import java.util.concurrent.*;

public class CallableDemo {
  public static void main(String[] args) throws Exception {
    ExecutorService executor = Executors.newSingleThreadExecutor();
    
    Callable<Integer> task = () -> {
      Thread.sleep(1000);
      return 123;
    };
    
    Future<Integer> future = executor.submit(task);
    
    System.out.println("Future is done? " + future.isDone());
    Integer result = future.get();
    System.out.println("Future is done? " + future.isDone());
    System.out.println("Result: " + result);
    
    executor.shutdown();
  }
}`
        },
        {
          id: 6,
          question: "Write a program demonstrating the use of volatile keyword for variable visibility.",
          difficulty: "Advanced",
          solutionHint: "Use volatile to ensure changes to a variable are visible to all threads.",
          codeExample: `public class VolatileDemo {
  private volatile boolean running = true;
  
  public void stop() { running = false; }
  
  public void run() {
    while(running) {
      System.out.println("Running...");
      try { Thread.sleep(100); } catch(InterruptedException e) {}
    }
    System.out.println("Stopped");
  }
  
  public static void main(String[] args) throws InterruptedException {
    VolatileDemo demo = new VolatileDemo();
    
    Thread t = new Thread(demo::run);
    t.start();
    
    Thread.sleep(1000);
    demo.stop();
  }
}`
        },
        {
          id: 7,
          question: "Create a program demonstrating deadlock between two threads.",
          difficulty: "Advanced",
          solutionHint: "Create a situation where two threads wait for each other's locks.",
          codeExample: `public class DeadlockDemo {
  private static final Object lock1 = new Object();
  private static final Object lock2 = new Object();
  
  public static void main(String[] args) {
    Thread t1 = new Thread(() -> {
      synchronized(lock1) {
        System.out.println("Thread 1: Holding lock 1...");
        try { Thread.sleep(100); } catch(InterruptedException e) {}
        System.out.println("Thread 1: Waiting for lock 2...");
        synchronized(lock2) {
          System.out.println("Thread 1: Acquired both locks");
        }
      }
    });
    
    Thread t2 = new Thread(() -> {
      synchronized(lock2) {
        System.out.println("Thread 2: Holding lock 2...");
        try { Thread.sleep(100); } catch(InterruptedException e) {}
        System.out.println("Thread 2: Waiting for lock 1...");
        synchronized(lock1) {
          System.out.println("Thread 2: Acquired both locks");
        }
      }
    });
    
    t1.start();
    t2.start();
  }
}`
        },
        {
          id: 8,
          question: "Implement a program demonstrating the use of ThreadLocal for thread-specific variables.",
          difficulty: "Advanced",
          solutionHint: "Use ThreadLocal to maintain separate instances for each thread.",
          codeExample: `public class ThreadLocalDemo {
  private static final ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 0);
  
  public static void main(String[] args) {
    Runnable task = () -> {
      int value = threadLocal.get();
      value += 1;
      threadLocal.set(value);
      System.out.println(Thread.currentThread().getName() + ": " + threadLocal.get());
    };
    
    Thread t1 = new Thread(task);
    Thread t2 = new Thread(task);
    
    t1.start();
    t2.start();
  }
}`
        },
        {
          id: 9,
          question: "Write a program demonstrating the use of CountDownLatch for thread coordination.",
          difficulty: "Advanced",
          solutionHint: "Use CountDownLatch to make threads wait until a count reaches zero.",
          codeExample: `import java.util.concurrent.*;

public class CountDownLatchDemo {
  public static void main(String[] args) throws InterruptedException {
    CountDownLatch latch = new CountDownLatch(3);
    
    Runnable worker = () -> {
      System.out.println(Thread.currentThread().getName() + " working");
      try { Thread.sleep(1000); } catch(InterruptedException e) {}
      System.out.println(Thread.currentThread().getName() + " finished");
      latch.countDown();
    };
    
    new Thread(worker).start();
    new Thread(worker).start();
    new Thread(worker).start();
    
    latch.await();
    System.out.println("All workers finished, main thread continues");
  }
}`
        },
        {
          id: 10,
          question: "Create a program demonstrating the use of ConcurrentHashMap for thread-safe map operations.",
          difficulty: "Advanced",
          solutionHint: "Use ConcurrentHashMap for thread-safe operations without explicit synchronization.",
          codeExample: `import java.util.concurrent.*;

public class ConcurrentHashMapDemo {
  public static void main(String[] args) {
    ConcurrentHashMap<String, Integer> map = new ConcurrentHashMap<>();
    
    Runnable task = () -> {
      for(int i = 0; i < 1000; i++) {
        map.put(Thread.currentThread().getName() + i, i);
      }
    };
    
    Thread t1 = new Thread(task);
    Thread t2 = new Thread(task);
    
    t1.start();
    t2.start();
    
    try {
      t1.join();
      t2.join();
    } catch(InterruptedException e) {}
    
    System.out.println("Map size: " + map.size());
  }
}`
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
    <div className="java-practice-app">
      <header>
        <h1>Core Java Practice Questions</h1>
        
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
        .java-practice-app {
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
          .java-practice-app {
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

export default PracticeCore;