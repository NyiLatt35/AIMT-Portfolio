function sayHello(){
    console.log("hi");
    return "welcome";
    console.log("Hello"); // don't run because this is after return.
}
console.log(sayHello());

function sayHi(name="Helen"){
    console.log(name + " says hello.");
}
sayHi("Andy");
sayHi("Alice");
sayHi("Mario");
sayHi();

function sum(num1=0 , num2=0){
    console.log(`num1 is ${num1} and num2 is ${num2}`);
    console.log(`result is = ${num1+num2}`);
}
sum(2,5);
sum();
sum(7);

function upperName(name){
    // console.log(name[0].toUpperCase()+name.slice(1));
    console.log(name.replace(name[0],name[0].toUpperCase()));
}
upperName("mario");

// Arrow function
const great = ()=>    console.log("good morning!");
great();

const sub = (num1,num2)=> num1-num2;
console.log(sub(5,3));

const sayHey = name => name.replace(name[0],name[0].toUpperCase()) + " says hello.";
console.log(sayHey("mario"));

// for multipline
const multi = (num1,num2)=> num1*num2;
console.log(multi(5,4));
