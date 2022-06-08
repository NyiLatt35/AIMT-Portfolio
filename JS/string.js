let name = "Mario";
let subject = new String("Hello");

console.log(name);
console.log(subject);

let str = "Hello world";
console.log(str.length);
console.log(str[4]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.slice(2,4));
console.log(str.slice(4,2));
console.log(str.substring(2,4));
console.log(str.substring(4,2));
console.log(str.slice(2)); // 2 nay yar ka nay sa p pyan yuu
console.log(str.substring(2));

let str1 = "welcome";
console.log(str1.length);
let str2 = "    welcome   ";
console.log(str2.length);
console.log(str2.trim().length);

let str3 = "Hey, Hello";
console.log(str3.replace("l","y"));
console.log(str3.replaceAll('l','y'));
console.log(str3.indexOf('H'));
console.log(str3.search('o'));
console.log(str3.lastIndexOf('e'));

// Concatenation
let username = "Andy";
let age = 12;

let result = username+age;
console.log(result);

result = "Name is "+ username+" age is "+ age;
console.log(result);

// Template String
result = `Name is ${username} age is ${age}`;
console.log(result);

let str4 = "andy";
let str5 = str4.replace(str4[0],str4[0].toUpperCase());
console.log(`${str5};`);

let ans = str4[0].toUpperCase()+str4.slice(1);
console.log(ans);