//Level 4: Expert (Asynchronous & Error Handling)
// The Delayed Promise: Create a Promise that resolves after a 2-second delay using setTimeout()
//Use the .then() method to log "Task Complete!" once the promise is successfully fulfilled

//Concepts applied: Asynchronous JavaScript, Promises, and setTimeout.

const delayedPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Task Complete!");
        }, 2000);
    });
    
    delayedPromise.then((result) => {
        console.log(result);
    });
