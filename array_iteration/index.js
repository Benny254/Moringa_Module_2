//Array Iteration & Modification: Create an array of your five favorite fruits

//Use a loop to iterate through the array and print each fruit
//Then, demonstrate how to change the value of the second fruit in the list

//Concepts applied: Arrays and loop iteration.


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits[4] = "grape";

console.log(fruits);
