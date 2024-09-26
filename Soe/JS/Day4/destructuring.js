// let a, b, rest;
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a, b, rest);

let user = ["John", 20, "Yangon", "Mdy"];
let [username, age, ...city] = user;
console.log(username, age, city);
