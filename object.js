//Problem Statement 1
//Explain the usage of ternary operator with syntax and write a program to check whether the number is even or odd using the ternary operator.
//ans:>>
//Ternary operator is used to test the conditions similar to that of an if else block. It has three operands: condition, statement if condition is true and statement if condition will be false.
//Syntax:
//condition ? value iftrue: value if false;
//First we define the condition and if it's evaluated to be true then the statement after the question mark will be executed else the statement after the colon will be executed.
const number = 10;
const result = number % 2 === 0 ? "Even" : "Odd";
console.log(result);


//Problem Statement 2
//Describe the usage of the comma operator in JavaScript and provide an example.
//ans:>>
//Comma operator allows us to evaluate multiple expressions in a single statement like declaring multiple variables in a single statement separating them with the comma operator.
//Example
const a = 10, b = 20, c = 30;
console.log(a, b, c);


//Problem Statement 3
//Use a nested ternary operator to check that a number is positive, negative or zero. You have to print “positive” if the number is positive and similarly for negative and zero also.
//syntax:
//number = 5  # replace this with the number you want to check
//
//result = "positive" if number > 0 else "negative" if number < 0 else "zero"
//print(result)

//Problem Statement 4

//Use a ternary operator to check that a person is eligible to vote or not by checking his age. If the age of the person is less than 18 then “You cannot vote” should be logged else “You can vote” should be logged.
//ans:>>
//age = 20  # replace this with the person's age
//
//print("You can vote" if age >= 18 else "You cannot vote")
//


