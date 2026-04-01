//Level 2: Intermediate (Loops & Arrays)
//The Natural Summation: Using a for loop, write a program that calculates the sum of all natural numbers from 1 up to a given number n

//Concepts applied: for loop initialization, condition checking, and update expressions

function naturalSummation(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    console.log(naturalSummation(100));

