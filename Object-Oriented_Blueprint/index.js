//Object-Oriented Blueprint: Create a class called Student with a constructor that initializes name and grade

//Add a method to the class that prints a message saying whether the student passed or failed based on their grade

//Concepts applied: Classes, constructors, and object methods.

class Student {
        constructor(name, grade) {
            this.name = name;
            this.grade = grade;
        }
    
        printMessage() {
            if (this.grade >= 50) {
                console.log(`${this.name} passed the exam`);
            } else {
                console.log(`${this.name} failed the exam`);
            }
        }
    }
    
    const student1 = new Student("Ben", 49);
    student1.printMessage();
