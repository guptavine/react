// // Type

// console.log(parseInt('1') + 11);

// // Condition
// let i = 1;

// if (i == 1) {
//     const x = 7 % 2 === 0 ? 'Number is even' : 'Number is Odd';
//     console.log(x);
// }
// else{
//     console.log("Not Found Error 404")
// }


// //loop 

// //1. For Loop
// for (let x = 1; x <= 5; x++ ){
//     console.log('Number is ' + x);
// }

// // 2. While Loop

// let y = 1;
// while (y<=5) {
//     console.log('while loopNumber is' + y);
//     y++;
// }

// // 3. Do While Loop

// let z = 1;
// do {
//     console.log('dowhile loopNumber is' + z);
//     z++;
// }while (z<=5);

// // 3. For ..of loop

// const numArray = [1, 2, 3, 4, 5]

// for (const num of numArray){
//     console.log('number is' + num);
// }


// Scope 

// 1. Block Scope
// 2. Function Scope
// 3. Global Scope
// 4. Nested Function Scope\

// Closure : 

// function outer (){
//     let a = 0
//     function inner(){
//         a++
//         console.log(a)
//     }
//     return inner
// }
// const fn = outer()
// fn()
// fn()

// Function Curring

// function sum(a, b, c) {
//     return a + b + c
// }

// function curry(fn){
//     return function (a) {
//         return function (b){
//             return function (c)
//             {
//                 return fn (a, b, c);
//             }
//         }
//     }
// }


// const curriedsum = curry(sum)
// console.log(curriedsum (2)(3)(5));

// const add2 = curriedsum(2)
// const add3 = add2(3)
// const add5 = add3(5)

// console.log(add5)


// this Keyword in javascript

// type of binding

// 1. Implicit Binding : when a function is invoke with a dot notation the object to the left 
// of the dot is what 'this' keyword is referencing.

// const person = {
//     name: 'Vineet',
//     sayMyName : function(){
//         console.log(`My Name is ${this.name}`)
//     }
// }

// sayMyName.person()

// 2. Explicit Binding

// const person = {
//     name: 'Vineet',
// }
// globalThis.name = 'Vineet'
// function sayMyName(){
//     console.log(`My Name is ${this.name}`)
// }

// sayMyName.call(person)


// 3. New Binding:  

// function Person(name) {
//     this.name = name
// }

// const P1 = new Person('Vineet')
// const p2 = new Person('Sarika')

// console.log(P1.name, p2.name)

// 4. Default Binding

// globalThis.name = 'Vineet'
// function sayMyName(){
//     console.log(`My Name is ${this.name}`)
// }

// sayMyName()

// Prototype : In Javascript every Function has a property called 'Prototype' that points to an object. 
//              we can make use of prototype object to determine our sharable property.

// why we use

// 1. Prototype is to share properties and method across instances.Person


// function Person(fName, lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// const person1 = new Person('Anaye', 'Gupta') // This is called Constructor Function..
// const person2 = new Person('Viyaansh', 'Gupta') // This is called Constructor Function..


// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }



// console.log(person1.getFullName());
// console.log(person2.getFullName());

// 2. Is inheritance is a concept of prototype as referal to Prototypal inheritance

// In this example we will create properties and methods from Person 


// function Person(fName, lName){
//     this.firstName = fName
//     this.lastName = lName
// }

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName
// }

// function GoodHuman(fName, lName) {
//     // this = {}
//     Person.call(this, fName, lName)
//     this.isHumanGood = true
// }

// GoodHuman.prototype.doPooja = function(){
//     console.log('doing pooja everyday');
// }

// GoodHuman.prototype = Object.create(Person.prototype)

// const anaye = new GoodHuman('Anaye', 'Gupta')

// console.log(anaye.getFullName())

// GoodHuman.prototype.constructor = GoodHuman 


// Class is syntatical sugar what is already there in javascript


// class Person {   //create a class
//     constructor(fName, lName){ //initialize properties
//         this.firstName = fName
//         this.lastName = lName
//     }

//     sayMyName(){ // how to add methods
//         return this.firstName + ' ' + this.lastName
//     }
// }


// const classP1 = new Person ('Anaye', 'Gupta') //create an instance of a class
// console.log(classP1.sayMyName())

// class GoodHuman extends Person{ //how to inherit parents properties using 'extends' and 'super' keywords
//     constructor (fName, lName){
//         super(fName, lName)
//         this.isHumanGood = true
//     }

//     doPooja(){
//         console.log('doing pooja everyday')
//     }
// }

// const anaye = new GoodHuman('Anaye', 'Gupta')
// console.log(anaye.sayMyName())


// Iterables and Iterators - Protocols

// ex array, string , maps, sets done by default

// const obj = {
//     [Symbol.iterator]:function(){
//         let step = 0
//         const loop = {
//             next:function(){
//                 step++

//                 if (step === 1){
//                     return {value:'Hello', done: false}
//                 } else if(step === 2){
//                     return {value:'World', done:false}
//                 }
//                 return {value:undefined, done:true}
//             },
//         }
//         return loop
//     },
// }

// for (const word of obj){
//     console.log(word)
// }


// Generators

// const obj = {
//     [Symbol.iterator]:function(){
//         let step = 0
//         const loop = {
//             next:function(){
//                 step++

//                 if (step === 1){
//                     return {value:'Hello', done: false}
//                 } else if(step === 2){
//                     return {value:'World', done:false}
//                 }
//                 return {value:undefined, done:true}
//             },
//         }
//         return loop
//     },
// }

// function* generatorFunction(){
//     yield 'Hello'
//     yield 'World'
// }

// const gerneratorObject = generatorFunction()

// for (const word of gerneratorObject){
//     console.log(word)
// }


// Async Javascript 

// Browser Web Api

// set Timeout

// set Interval

// Promise

// Promise -> resolve/ reject -> then / catch 

// async funcion await 



