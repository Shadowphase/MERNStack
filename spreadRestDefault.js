// function GetVehicleDetails(name = "Default Vehicle", price = "$0", brandValue = "Default Normal") {
//     console.log(`
//         Name : ${name}
//         Price : ${price}
//         Brand Value : ${brandValue}    
//     `)
// }
// GetVehicleDetails("Lamborgini", "$5000", "Amazing")
// GetVehicleDetails("Toyota")
// GetVehicleDetails()
// function Divide(param1 = 1, param2 = 1) {
//     //return isNaN(param1/param2);
//     return param1/param2;
// }
// console.log(Divide(8,2))
// console.log(Divide(8))

// create two functions for sum and multiply to do sum and multiplication of two numbers with default params default value should be 100 for each

// function sum(p1=100, p2=100, p3=100, p4=100) {
//     return p1+p2+p3;
// }
// console.log(sum());

// function multiply(p1=100, p2=100, p3=100, p4=100) {
//     return p1*p2;
// }
// console.log(multiply())

// let array1 = [5];
// let array2 = [6,7];
// console.log(sum.apply(array1,array2));

//spread operator : spreads the array in conservational manner, we also use it for the shallow copy of objet arrays
// let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];
// // console.log(arrayOFCities[0])
// // console.log(arrayOFCities[1])
// console.log(...arrayOFCities)

// var User = {
//     name : "Kim"
// }
// var User2 = {
//     name : "Jhong"
// }
// var User3 = {
//     names : "Jhong"
// }
// function add(x = 0, y = 0, z = 0){
//     //console.log("this + scope + context + execution context ", this)
//     console.log(this.name)
//     return x+y+z;
// }
// //console.log(add(1,2,3))
// let array = [500,600,800];
// console.log("using spread " + add(...array))
// console.log("using apply " + add.apply(User, array))
// console.log("using apply " + add.apply(User2, array))
// console.log("using apply " + add.apply(User3, array))


// let Accounts ={
//     accountHolderName : "Tohney",
//     balance : "$6000",
//     address : {
//         address1 : "address1",
//         address2 : "address2"
//     }
// }

// //let PurhaseOrder = {Accounts,  Delivery : "address3"};
// let PurhaseOrder = {balance : "$0", ...Accounts, Delivery:"address3"};
// //console.log(PurhaseOrder)
// Accounts.accountHolderName = "Hoaian";
// console.log(Accounts)
// console.log(PurhaseOrder)

//create list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

// function getVacc(){
//     return Vaccine = {
//         vName:"Foo",
//         doses:2,
//         price:1
//     }
// }



// Doctor = {
//     name:"Ted",
//     degree:"PHD",
//     age:42,
//     ...getVacc()
// }

// console.log(Doctor);


//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
// generatearray(start, end)
// largesum(...arrayNum) and returns sum
function generateArray(start, end){
    let array=[];
    for(let i=0; i<=end-start; ++i){
        array[i]=start+i;
    }
    return array;
}

// function largeSum(...nums) {
//     let sum=0;
//     for(let n of nums){
//         sum+=n;
//     }
//     return sum;
// }

function largeSum(...nums) {
    let sum=nums.reduce((prev, curr)=>{
        return prev+curr;
    },0);
    return sum;
}
console.log(largeSum(...generateArray(2,4)));