// let user = { // Object literal
//     name: "John",
//     age: 20,
// }
// console.log(user.name, user.age)

// let myObj = new Object(); // {}
// myObj.name = "John";
// myObj.age = 20;
// console.log(myObj);

// Object constructor
// function myFruit(name, price) {
//   console.log(name, price);
//   console.log(this);
//   this.fruitName = name;
//   this.price = price;
// }
// let myObj = new myFruit("Apple", "$10");
// let myObj2 = new myFruit("Orange", "$5");
// console.log(myObj, myObj.fruitName);
// console.log(myObj2);

// Nested Objects

// let user = {
//   name: "John",
//   age: 20,
//   parent: {
//     fatherName: "Jobs",
//     motherName: "Rose",
//   },
// };
// console.log(user.parent.motherName, user.parent.fatherName);
// delete user.age;
// console.log(user);

// const user = {
//     name: "May"
// }
// user.name = "Khine";
// console.log(user)

// function makeUser(name, age) { //shorthand
//   return {
//     name, // name: name
//     age, // age: age
//   };
// }
// console.log(makeUser("John", 20));

let user = {// copy
  name: "John",
  age: 20,
};
let admin = user;
user.name = "Rose";
admin.name = "Jobs";
console.log("user", user);
console.log("admin", admin);

// let user = {
//   name: "John",
//   age: 20,
// };
// let cloneUser = {};
// for (let i in user) {
//   cloneUser[i] = user[i];
// }
// user.name = "Rose";
// cloneUser.name = "Jobs";
// console.log("user", user);
// console.log("clone", cloneUser);

// let a = {}; // same reference
// let b = a;
// console.log(a === b); // true

let a = {};
let b = {};
console.log(a == b);
