// //Please give me an example of - All Types of functions, overloading, closures, hoisting (variable and functional both), and printing all javascript dataTypes

// purefunc(true); //hoised func

// console.log("hoisted var " + variable); //hoisted var

// function purefunc(param){ // pure function declaration
//     console.log("hoisted function " + param?param:false);
//     return param;
// }

// purefunc(variable); //hoisted var and executed func

// var variable = "not default var"; //initialize var

// console.log("type string - " + typeof variable); //string type
// console.log("type undefined - " + typeof undefined); //undefined type
// console.log("type number - " + typeof 4); //number type
// console.log("type object - " + typeof {}); //object type
// console.log("type null - " + typeof null) // null type
// console.log("type boolean - " + typeof true); // boolean

// var myFunc = function(){ // declare variable function
//     console.log("variable function");
// }

// myFunc(); // execute variable function

// function overwritten(param1) {
//     console.log("this is an overwritten function - " + param + param2);
// }
// overwritten("foo");
// function overwritten(param1, param2){ //overwritten funciton
//     console.log("this is an overwritten function - " + param1 + param2);
// }
// purefunc("foo", "bar"); // execute overwritten function

// function func1(){//closures
//     var name = "foo"
//     function func2(param){
//         function func3(){
//             return param;
//         }
//         return func3();
//     }

//     return func2("bar");
// }

// console.log(func1());


// var User = function (name, age) {
//     this.name = name; //this - is the context (scope) of the function
//     this.age = age;

//     this.getUser = function () {
//         return{
//             name : this.name,
//             age : this.age
//         }
//     }
//     this.getAge = function () {
//         return this.age;
//     }
// }

// var userObj = new User("Hoyan", 19);
// console.log(userObj.getUser());
// console.log("age from obj func " + userObj.getAge());
// userObj.session = "MERNStack"; // add variable to object

// userObj.getSession = function () { // add func to object
//     return this.session;
// }
// console.log(userObj.getSession());

// //overriding
// userObj.getUser = function () {
//     return "From Child Override";
// }
// userObj.getAge = function(){
//     return "age from overriden func " + 21;
// }

// console.log(userObj.getUser());
// console.log(userObj.getAge());

// var newUser = new User("newName", 1);
// console.log(newUser.getUser());


let obj = {
    a:1,b:{d:"one",e:"two"},c:3
}

let {a,b:{d},c="C",f="n/a"}=obj;

console.log(`${a}, ${d}, ${c}, ${f}`);