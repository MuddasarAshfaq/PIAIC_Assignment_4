"use strict";
//Write a program that uses filter to remove all negative numbers from an array of numbers
let arr = [2, 4, -5, 88, -78, 44, -12];
let newArr = arr.filter((element) => {
    if (element > 0) {
        return true;
    }
});
console.log(newArr);
//Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
let givenArr = [1, 2, 3, 4, 5];
let reqArr = givenArr.map((num) => num * 2);
console.log(reqArr);
//Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.
let array = ["apple", "banana", "cherry", "date", "grape"];
let desArray = array.filter((fruits) => {
    if (fruits.length > 5)
        return true;
});
console.log(desArray);
//Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the squares of even numbers.
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqArr = arr1.map((value) => value ** 2).filter((value) => {
    if (value % 2 === 0)
        return true;
});
console.log(sqArr);
//Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
let temp_C = [0, 10, 20, 30, 40];
let temp_F = temp_C.map((celcius) => (celcius * 9 / 5 + 32));
console.log(temp_F);
//Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.
let arr2 = [3, 6, 9, 12, 15, 18];
let oddArr = arr2.filter((odd) => {
    if (odd % 2 != 0)
        return true;
}).map((odd) => odd * 2);
console.log(oddArr);
//Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an exclamation mark at the end, e.g., "Alice!".
let arr3 = ["Alice", "Bob", "Charlie", "David", "Emily"];
arr3.forEach((arr3) => {
    console.log(`${arr3}!`);
});
