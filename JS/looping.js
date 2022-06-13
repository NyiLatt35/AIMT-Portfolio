// For Looping
for (let i=0;i<=10;i=i+2){
    console.log("number is " + i);
}

// While Looping
let x = 0;
while(x<3){
    console.log(x);
    x++;
}

// Do While Looping
let y = 0;
do{
    console.log("y is "+y);
    y+=3;
}while(y<10);

// Exercise
let fruits = ["apple","orange","mango","grapes","strawberry"];

for(let i=0;i<fruits.length;i++){
    console.log("Fruit name is "+ fruits[i]);
}

// For of looping
for(f of fruits){
    console.log("fruit name is "+ f);
}

// for each looping
fruits.forEach(function (f){
    console.log(f.toUpperCase());
})

// map nee const and return (result is array method)
const mapFruits = fruits.map(function (f){
    return f.toUpperCase();
});
console.log(mapFruits);

// filter
let todos = [
    {id:1, title:"playing" , isCompleted:true},
    {id:2, title:"gaming" , isCompleted:true},
    {id:3, title:"cooking" , isCompleted:false},
    {id:4, title:"homework" , isCompleted:true},
    {id:5, title:"coding" , isCompleted:false},
]
const filterFruits = todos.filter(function (todo){
    return todo.isCompleted == true;
});
console.log(filterFruits);

// Exercise For loop
// const todoFalse = todos.filter(function (todo){
//     return todo.isCompleted != true;
// });
// console.log(todoFalse);
// for(let i=0;i<todoFalse.length;i++){
//     console.log(todoFalse[i].title+" is not completed.");
// }

// Exercise 
const todoFalse = todos.filter(function (todo){
    return todo.isCompleted != true;
});

const todoMap = todoFalse.map(function(todo){
    return todo.title;    
});
todoMap.forEach(function(todo){
    console.log(todo + " is not completed");
});

todos.filter(todo => todo.isCompleted == false)
     .map(todo => todo.title)
     .forEach(todo => todo + " is not completed.")