// let → Keyword
// name → Variable name
// "Sujith" → Value

// let age = 22;

// console.log(age);

// age = 23;

// console.log(age);

// const country = "India";

// console.log(country);

// country = "USA";

// console.log(country);

// var city = "Tirur";

// console.log(city);

// city = "Kottakkal"

// console.log(city)


// Variable Naming Rules

// let name = "Sujith";

// console.log(name);

// let firstName = "Sujith";

// console.log(firstName);

// let first_name = "Sujith";

// console.log(first_name);

// let age25 = 25;

// console.log(age25);

// let $price = 100;

// console.log($price);

// let _count = 5;

// console.log(_count);

// let 1name = "Sujith";

// console.log(1name);

// let first-name = "Sujith";

// console.log(first-name);

// let let = 10;

// console.log(let);

// let a = 10;
// let b = 20;

// a = 30;

// console.log(a);
// console.log(b);

// function greet() {
//     let name = "Sujith";
//     console.log(name);
// }

// greet();

// function greet() {
//     let name = "Sujith";
// }

// console.log(name);

// greet()

// function test() {
//     var age = 24;
//     console.log(age);
// }

// test();

// console.log(age);

// function greet() {
//     const name = "Sujith";
//     console.log(name);
// }

// greet();

// const name = "Sujith";

// function greet() {
//     console.log(name);
// }

// greet();

// console.log(name);

// if (true) {
//     let name = "Sujith";
//     console.log(name);
// }

// console.log(name);



// Function Scope

// function functionScopeExample() {
//     if (true) {
//         var functionScopedVar = "I am accessible anywhere in this function!";
//     }

//     console.log(functionScopedVar);
// }

// functionScopeExample();

// console.log(functionScopedVar);

// Block Scope

// function blockScopeExample() {
//     if (true) {
//         let blockScopedLet = "I am trapped in this block!";
//         const blockScopedConst = "Me too!";
//         console.log(blockScopedLet);
//         console.log(blockScopedConst)
//     }

//     console.log(blockScopedLet);
//     console.log(blockScopedConst)
// }

// blockScopeExample()


// Variable hoisting

// var name = "Sujith";

// console.log(name);

// console.log(name);

// var name = "Sujith";

// var name;

// console.log(name);

// name = "Sujith";

// console.log(age);

// let age = 24;

// greet();

// function greet() {
//     console.log("Hello");
// }

// let answer = 42;
// console.log(answer);

// answer = "Thanks for all the fish!";
// console.log(answer);

// x = "The answer is " + 42;

// console.log(x);

// y = 42 + " is the answer"

// console.log(y);

// z = "37" + 7;

// console.log(z);

// a = "37" - 7;

// console.log(a);

// b = "37" * 7;

// console.log(b);

// console.log(parseInt("123"));

// console.log(parseInt("123", 10));

// console.log(parseInt("   123 "));

// console.log(parseInt("077"));

// console.log(parseInt("1.9"));

// console.log(parseFloat("1.9"));

// console.log(parseInt("ff", 16));

// console.log(parseInt("A", 16));

// console.log(parseInt("10", 16));

// console.log(parseInt("0xFF", 16));

// console.log(parseInt("xyz"));

// console.log(parseInt("25px"));

// console.log(parseInt("px25"));

// console.log(parseFloat("3.14"));

// console.log(parseFloat("100"));

// console.log(parseFloat("1.9"));

// console.log(parseInt("1.9"));
// console.log(parseFloat("1.9"));

// console.log(parseFloat("3.14abc"));

// console.log(parseFloat("abc3.14"));

// console.log(parseFloat("   5.67   "));

// console.log(parseFloat("-12.5"));

// console.log(parseFloat("+12.5"));

// console.log(parseFloat("314e-2"));

// console.log(parseFloat("Infinity"));

// console.log(Number("123"));

// console.log(Number("12.5"));

// console.log(Number(true));
// console.log(Number(false));

// console.log(Number(null));

// console.log(Number(undefined));

// console.log(Number(""));

// console.log(Number("   "));

// console.log(Number("hello"));

// console.log(Number("100abc"));

// console.log(parseInt("100abc"));
// console.log(Number("100abc"));

// console.log(Number("0x11"));

// console.log(Number("0b11"));

// console.log(Number("0o11"));

// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits);

// console.log(fruits[0]);

// let isLoggedIn = true;
// let isStudent = false;

// console.log(isLoggedIn);
// console.log(isStudent);

// let age = 24;

// console.log(age);

// let person = {
//     name: "Sujith",
//     age: 24,
//     city: "Tirur"
// };

// console.log(person);

// console.log(person.name);

// let pattern = /hello/;

// console.log(pattern);

let pattern = /hello/;

console.log(pattern.test("hello world"));

console.log(pattern.test("JavaScript"));

let name = "Sujith";

console.log(name);

let city = 'Tirur';

console.log(city);

let language = `JavaScript`;

console.log(language);
