let arr1 = new Array("one","two","three");
console.log(arr1);

let arr2 = ["apple","orange","mango",100,23,true,1.247];
console.log(arr2);
console.log(arr2.length);
console.log(arr2.sort());

let arr = ["apple","orange"];
console.log(arr);

arr.push("mango");
console.log(arr); // add to the end 

arr.unshift("grapes");
console.log(arr); // add to the start

arr.pop();
console.log(arr); // delete from the end

arr.shift();
console.log(arr); // delete from the start 

console.log(arr[1]);

arr[0] = "strawberry";
console.log(arr); // replace to the array index

arr[5] = "watermelon";
console.log(arr);

let arr3 = ["php","javascript"];
let arr4 = ["html","css"];
let ans = [...arr3, ...arr4]; // spread operator
console.log(ans);

[a1,a2,a3,a4] = ans; // array destructuring
console.log(a1);
console.log(a3);

console.log(Array.isArray(ans));