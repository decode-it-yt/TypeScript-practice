// // Intersection Types
// type Person = {
//     name: string;
//     age: number;
// }

// type Employee = {
//     id: number;
//     email: string;
// }

// type User = Person & Employee;

// const user1: User = {
//     name: "Decodeit",
//     age: 24,
//     id: 101,
//     email: "decodeitedu@gmail.com"
// }

// console.log(`Name: ${user1.name}, Age: ${user1.age}, id: ${user1.id}, Email: ${user1.email}`);

// // ---------------------------------------------------------------------------

// // Unions
// // 1. Variables
// const password: string | number = 43;

// // 2. types
// type Person = {
//     name: string;
//     age: number;
// }

// type Account = {
//     email: string;
//     password: string;
// }

// type User = Person | Account;

// const user1: User = {
//     email: "decodeitedu@gmail.com",
//     password: "password12",
// }

// console.log(user1);

// // 3. Arrays
// const info: (number | string)[] = [1,3,5,"decodeit"];
// console.log(info);

// // ---------------------------------------------------------------------------

// // Literal Types
// let color: "red" | "green" | "blue";

// color = "red";
// color = "yellow";      // throws error

// // ---------------------------------------------------------------------------

// // Tuples
// const myTup: [string, number, boolean | string] = ["decodeit", 4, true];
// console.log(myTup);

// const [value1, value2, value3] = myTup;
// console.log(value1);
// console.log(value2);
// console.log(value3);

// // ---------------------------------------------------------------------------

// // Enums
// enum WeatherCondition {
//     Sunny = "Sunny",
//     Rainy = "Rainy",
//     Cloudy = "Cloudy",
//     Snowy = "Snowy",
// }

// const currentWeather = WeatherCondition.Sunny;
// console.log(currentWeather);

// // ---------------------------------------------------------------------------

// // OOP
// // Class Properties Annotations
// class Person {
//     personName: string;
//     age: number;

//     constructor(personName: string, age: number){
//         this.personName = personName;
//         this.age = age;
//     }
// }

// const person = new Person("Decodeit", 24);
// console.log(person);

// // Access Modifiers
// class Human{
//     public firstName: string;
//     private lastName: string;
//     protected age: number;

//     constructor(firstName: string, lastName: string, age: number){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     getDetails(): string {
//         return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
//     }
// }

// class Person extends Human{
//     constructor(firstName: string, lastName: string, age: number){
//         super(firstName, lastName, age)
//     }

//     getAge(): string {
//         return `Age is ${this.age}`
//     }
// }

// const person1 = new Person("Decodeit", "Youtube", 24);
// console.log(person1.getAge());

// // Getters & Setters
// class Person {
//     private myAge: number = 20;

//     get age(): number {
//         return this.myAge;
//     }

//     set age(value: number) {
//         this.myAge = value;
//     }
// }

// const person = new Person();
// console.log(`Current Age is ${person.age}`);
// person.age = 24;
// console.log(`Current Age is ${person.age}`);


// // ---------------------------------------------------------------------------

// // Interfaces
// // 1. Object 
// interface Mobile {
//     readonly name: string;
//     ram: number;
//     storage?: number;
// }

// const myMobile: Mobile = {
//     name: "16 Pro",
//     ram: 8,
//     // storage: 512,
// }

// console.log(myMobile);
// console.log(myMobile.name);
// console.log(myMobile.ram);
// // console.log(myMobile.storage);

// // 2. Interfaces for Functions
// interface MathOperation{
//     (num1: number, num2: number): number;
// }

// const add: MathOperation = (a, b) => a + b;
// console.log(add(3,4));
// const subtract: MathOperation = (a, b) => a - b;
// console.log(subtract(9, 4));

// // 3. Interfaces with Methods
// interface Person{
//     firstName: string;
//     lastName: string;
//     age: number;
//     sayHello(): void;
// }

// function  greet(person: Person): void{
//     console.log(`Hello, ${person.firstName} ${person.lastName}`);
//     person.sayHello();
// }

// const steve: Person = {
//     firstName: "Steve",
//     lastName: "Rogers",
//     age: 180,
//     sayHello(){
//         console.log("On your left!");
//     }
// }

// const decodeit: Person = {
//     firstName: "Decodeit",
//     lastName: "Youtube",
//     age: 24,
//     sayHello(){
//         console.log("Hello There");
//     }
// }

// greet(steve);
// greet(decodeit);

// // 4. Extending the Interfaces
// interface MovieDetails{
//     readonly movieName: string;
//     rating: number;
//     printMovieInfo(movieName: string, price: number, rating: number): string | number;
// }

// interface MovieGenre extends MovieDetails{
//     movieGenre: string;
// }

// const movie1: MovieGenre = {
//     movieName: "John Wick",
//     movieGenre: "Action",
//     rating: 8,
//     printMovieInfo(movieName: string, price: number, rating: number): string | number {
//         return `Movie Name: ${movieName}, Price: ${price}, Rating: ${rating}`;
//     },
// }

// console.log(movie1.printMovieInfo("John Wick", 320, 8));

// // 5. Interfaces with Classes

// interface VehicleFunctions{
//     start(): void;
//     stop(): void;
// }

// class Car implements VehicleFunctions{
//     start(): void {
//         console.log("Car has been Started...");
//     }
//     stop(): void {
//         console.log("Car has been Stopped!");
//     }
// }

// const car1 = new Car();
// car1.start();
// car1.stop();

// // 6. Declaration Merging
// interface Car{
//     brand: string;
//     start(): void;
// }

// interface Car{
//     model: string;
//     stop(): void;
// }

// const myCar: Car = {
//     brand: "Audi",
//     model: "R8",
//     start(){
//         console.log("Car Started...");
//     },
//     stop(){
//         console.log("Car Stopped!");
//     }
// }

// myCar.start();
// myCar.stop();
// // ---------------------------------------------------------------------------
