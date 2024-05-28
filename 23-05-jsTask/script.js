//Arithmetic operators: + - / * %
// Addition (+)
let a = 24;
let b = 6;
let addition = a + b;
console.log ("Value of a+b is " + addition);   

// Subtraction (-)
let subtraction = a-b;
console.log("value of a-b is " +subtraction);

//Multiplication (*)
let multiplication = a*b;
console.log("Value of a*b " +multiplication);

//Division (/)
let division = a/b;
console.log("Value of a/b is "+division);

//Modulus (%)

let modulus = a % b;
console.log("Value of a%b is "+modulus)

//Exponentiation (**)

let exponentiation = a ** b;
console.log("Value of a**b(i.e.,24 power 6) is "+ exponentiation)

//Increment (++)
a++;
console.log("Value of a++ (a increment) is " +a);

//decrement (--)
a--;
console.log( "value of a--(a decrement) is " +a)



//Check the implicite and explicit coercion in js


//Implicit

let x= 9966;  // here the x value considered as string automatically.This process is called implicite 
let y="Ram";
let z= x+y;
console.log( "(string concatenation) " +z) 

//example 2
let numOne="100"; 
let numTwo="40";
let additionNum = numOne+ 10; 
console.log("The value of numOne+10 is(here the value is concatnated even though numOne-value is string and added with number data type(10)) " +additionNum);

let subtractionNum = numTwo - 5;

console.log("The value of numTwo-5 is (here the string value (numTwo='40') it's automatically converted into number data-type and executed the condition ) "+ subtractionNum  )



//Explicit Coercion

let sum= Number(numOne)+Number(numTwo);
console.log("value of numOne+numTwo is (here we forcfully converted string datatype into number ) "+sum);


//objects in js
let person = {
    name: "Ram",
    age: 25,
    qualification: "Graduation",
    grade:8.28,
  };

  //Accessing Object Properties:
  console.log(person.name);
  console.log(person.qualification);
  console.log(person["grade"]);
  console.log(person["age"]);

  //Modifying Object Properties:
  person.age = 26;
  console.log(person["age"])


  //Adding and Deleting Properties:

  //i) adding property
  person.designation = "fullstack web developer";
  console.log(person.designation);

  //deleting
  delete person.grade;
  console.log(person.grade);




  //Array in JS
  let students = ["Ram", "Dilip", "Shiva", "Raghu"];
  let cources = new Array("HTML", "CSS", "JS", "MONGO-DB", "Node-js", "Express.js");

  //Accessing Elements:
  console.log(students[0]);
  console.log(students[4]);

  console.log(cources[0]);
  console.log(cources[3]);

  //Modifying Elements:
  students[3] ="Shravya";
  console.log(students[3]);


