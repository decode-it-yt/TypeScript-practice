// // Generics

// // With Functions
// // example 1:
// function printValues<T>(value1: T, value2: T): [T, T] {
//     return [value1, value2];
// }

// const nums = printValues<number>(2,5);
// const strs = printValues<string>("Hello", "World");
// const bools = printValues<boolean>(true, false);

// console.log(nums);
// console.log(strs);
// console.log(bools);

// // example 2:
// function printValues<U, V>(value1: U, value2: V): [U, V] {
//     return [value1, value2];
// }

// const a = printValues<number, string>(9, "Hello");
// const b = printValues<boolean, number>(true, 4);
// const c = printValues<string, string>("Hello", "World");

// console.log(a);
// console.log(b);
// console.log(c);

// // example 3:
// function printValues<T>(value1: T): T {
//     return value1;
// }

// interface Dog<U>{
//     dogName: string;
//     breed: U;
// }

// const dog1: Dog<string> = {dogName: "Buddy", breed: "Labrador"};
// const value1 = printValues<Dog<string>>(dog1);
// console.log(value1);

// console.log(printValues<Dog<string>>({dogName: "Boomer", breed: "Beagle"}));

// // example 4: 
// function gentRandomKeyValuePair<T>(obj: {[key: string] : T}): {
//     key: string;
//     value: T;
// }{
//     const keys = Object.keys(obj);
//     const randKey = keys[Math.floor(Math.random() * keys.length)];
//     return {key: randKey, value: obj[randKey]};
// }

// const mobiles = {brand1: "Samsung", brand2: "Apple", brand3: "Nothing"};
// const randomStringPair = gentRandomKeyValuePair<string>(mobiles);
// console.log(randomStringPair);

// const numbers = {one: 1, two: 2, three:3};
// const randomNumberPair = gentRandomKeyValuePair<number>(numbers);
// console.log(randomNumberPair);

// // example 5:
// function filterArray<T>(array: T[], condition: (val: T) => boolean) : T[] {
//     return array.filter((eachVal) => condition(eachVal));
// }

// const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];
// const evenNumbers = filterArray<number>(numbers, (val) => val % 2 === 0);
// console.log(evenNumbers);

// const names: string[] = ["Tony", "Peter", "Tony", "Steve", "Tony"];
// const tonysCount = filterArray<string>(names, (val) => val === "Tony").length;
// console.log(tonysCount);

// interface Fruits{
//     name: string;
//     color: string;
// }

// const fruitsArray: Fruits[] = [
//     {name: "Banana", color: "Yellow"},
//     {name: "Watermelon", color: "Green"},
//     {name: "PineApple", color: "Yellow"},
// ]

// const yellowFruits = filterArray<Fruits>(fruitsArray, (fruit) => fruit.color === "Yellow");
// console.log(yellowFruits);

// // example 6:
// function reverseValues<U, V>(value1: U, value2: V) : [V, U] {
//     return [value2, value1];
// }

// const reversedValues = reverseValues("Hello", 4);
// console.log(reversedValues);

// // With Classes
// class Value<T>{
//     private value: T;

//     constructor(initialValue: T) {
//         this.value = initialValue;
//     }

//     getValue() : T {
//         return this.value;
//     }

//     setValue(newValue: T) : void {
//         this.value = newValue;
//     }
// }

// const numberValue = new Value<number>(4);
// console.log(numberValue.getValue());
// numberValue.setValue(18);
// console.log(numberValue.getValue());

// const stringValue = new Value<string>("TypeScript");
// console.log(stringValue.getValue());
// stringValue.setValue("Decodeit");
// console.log(stringValue.getValue());

// // ---------------------------------------------------------------------------

// // Type Narrowing

// // 1. Type Gaurds
// type myType = string | number;

// function typeCheck(value: myType) : void {
//     if (typeof value === "string"){
//         console.log("This is String");
//     } else {
//         console.log("This is Number");
//     }
// }

// typeCheck("Decodeit");
// typeCheck(4);

// // 2. instanceof Operator
// class Dog {
//     bark() : void {
//         console.log("Bow.. Bow..");
//     }
// }

// class Cat {
//     meow() : void {
//         console.log("Meow.. Meow..");
//     }
// }

// function animalSound(animal: Dog | Cat) : void {
//     if (animal instanceof Dog){
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }

// const myDog = new Dog();
// const myCat = new Cat();

// animalSound(myDog);
// animalSound(myCat);

// // 3. Intersection Types
// type Student = {
//     studentName: string;
//     studentID: number;
// }

// type Teacher = {
//     teacherName: string;
//     class: number;
// }

// type ClassTeacherDetails = Student & Teacher;

// const class1: ClassTeacherDetails = {
//     studentName: "Peter",
//     studentID: 112,
//     teacherName: "Tony",
//     class: 8,
// }

// console.log(`${class1.teacherName} is a High school teacher, who is teaching the class ${class1.class}, where a student named ${class1.studentName} with id number ${class1.studentID} is studying.`);

// // ---------------------------------------------------------------------------



