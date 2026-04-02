//Robust Factorial Logic: Write a function to calculate the factorial of a number

//To make it robust, wrap the logic in a try...catch block to handle potential runtime errors, such as an undefined variable or invalid input

//Concepts applied: Recursion or loops, error handling (try...catch), and complex problem-solving.


const factorial = (n) => {
    try {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
        }catch (error) {
            console.log("Error: " + error.message);
            return undefined;
        }
        }
    
        console.log(factorial(5));
