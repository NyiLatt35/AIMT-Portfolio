let student = new Object();
student.name = "mario";
student.age = 12;

console.log(student);
console.log(student.name);
console.log(student.age);

// Object Literal
let person = {
    name: "andy",
    age: 22,
    address: {
        no: 7,
        street: "Hello",
        city: "Yangon"
    },
    hobbies: [
        'cooking',
        'gaming',
        {
            like: "playing",
            go: "school"
        }
    ]
}

console.log(person);
console.log(person.name);
console.log(person.address.street);
console.log(person.hobbies[1]);
console.log(person.hobbies[2].go);
