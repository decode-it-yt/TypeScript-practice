
// // 1. Type Annotations

// let myName = "Decodeit";
// console.log(myName);
// console.log(typeof myName);
// myName = myName.toUpperCase();
// console.log(myName);

// const favNumber = 4;
// console.log(favNumber);
// console.log(typeof favNumber);

// const learnTS = true;
// console.log(learnTS);
// console.log(typeof learnTS);

// // ----------------------------------------------------

// // 2. Type Inference (Automatic assigning of types)

// const myName = "Decodeit";
// console.log(typeof myName);

// const favNumber = 4;
// console.log(typeof favNumber);

// const learnTS = true;
// console.log(typeof learnTS);

// // -----------------------------------------------------------

// // 3. any type

// let myName: any = "Decodeit";
// console.log(typeof myName);

// myName = 4;
// console.log(typeof myName);

// myName = true;
// console.log(typeof myName);

// // -----------------------------------------------------------

// // 4. Function Parameters Annotations

// // Regular Func
// function addOne(num: number){
//     return num + 1;
// }

// const result = addOne(4);
// console.log(result);

// // Arrow Func
// const multiply = (a: number, b: number) => a * b;
// const result = multiply(11, 4);
// console.log(result);

// // Default Params
// const greet = (person:string = "Decodeit") => {
//     return `Hello ${person}`;
// }

// console.log(greet());
// console.log(greet("Alien"));

// //Return Annotations 
// // (Regular)
// function addOne(num: number): number{
//     return num + 1;
// }

// const result = addOne(4);
// console.log(result);

// // (Arrow)
// const multiply = (a: number, b: number): number => a * b;
// const result = multiply(11, 4);
// console.log(result);

// // -------------------------------------------------------------

// // void type (This is return type, if function doesn't return anything)
// function myMessage(message: string): void{
//     console.log(`This is my message: ${message}`);
// }

// myMessage("Hello");

// // -------------------------------------------------------------

// // never keyword
// // A function that always throws an error
// function throwError(msg: string): never{
//     throw new Error(msg);
// }

// // A function that has an infinite loop
// function infiniteLoop(): never{
//     while (true) {}
// }
// // A variable that can never have a value
// let x: never;

// function neverReturns(): never{
//     while (true) {}
// }

// x = neverReturns();

// console.log(x);

// // -------------------------------------------------------------

// // Arrays types

// // Two types of Arrays -->
// // 1. Using the Square bracket notation [] to indicate an array of a specific type
// const nums: number[] = [1,2,3];
// nums.push(4);
// console.log(nums);

// // 2. Using the generic Array<type> notation to indicate an array of a specific type
// const names: Array<string> = ["Tony", "Sam"]
// names.push("Steve")
// console.log(names);

// //---------------------------------------------------------------

// // Multi-Dimensional Array {Matrix}
// const singleDi: number[] = [1,2,3,4];
// const multiDi1: number[][] = [[1,2,3]];
// const multiDi2: number[][][] = [[[1,2,3]], [[2,3,4]]];

// console.log(singleDi);
// console.log(multiDi1);
// console.log(multiDi2);

// // ----------------------------------------------------------------

// // Objects
// // 1. Objects literal notation
// const person: {firstName: string; lastName: string; age: number} = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     age: 180
// };

// console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);

// // 2. Object as function return value
// function person(): {firstName: string; lastName: string; age: number}{
//     return{
//         firstName: "Steve",
//         lastName: "Rogers",
//         age: 180,
//     }
// }

// const person1 = person();
// console.log(person1);

// // ---------------------------------------------------------------------------

// // Type Alias
// type Person = {
//     firstName: string;
//     readonly lastName: string;       // (readonly) --> once assigned, cannot be changed
//     age?: number                     // ? --> optional property
// }

// const printPersonDetails = (person: Person) => {
//     console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
// }

// const person1: Person = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     age: 180,
// }

// printPersonDetails(person1);

// const person2: Person = {
//     firstName: "Thor",
//     lastName: "son of Odin",
// }

// printPersonDetails(person2);

// // Throws error:
// person2.lastName = "God of Thunder";
// printPersonDetails(person2)

// // ---------------------------------------------------------------------------

