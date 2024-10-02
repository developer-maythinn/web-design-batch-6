// let fruit = [];
// fruit[0] = "apple";
// fruit[1] = "orange";
// console.log(fruit[0]);

// let fruits = new Array("apple", "orange", "mango");
// console.log(fruits, fruits[1]);

// let fruits = ["apple", "orange", "mango"];
// let strFruits = fruits.toString();
// console.log(strFruits, typeof strFruits)
// let pushArr = fruits.push("pipeapple")
// let popArr = fruits.pop();
// let unshift = fruits.unshift("kiwi")
// let shift = fruits.shift()
// fruits.splice(2, 1, "kiwi", "pipeapple")

// let colors = ["white", "black"];
// let result = fruits.concat(colors);
// let result = [...fruits, ...colors];
// console.log(result);

let fruits = ["apple", "orange", "mango"];
// console.log(fruits[0])
// const sum = function(num1, num2) {
//   return num1 + num2;
// };
// const sum = (num1, num2) => num1 + num2;

// console.log(sum(10, 5));
// let text = "";
// let fruitForEach = fruits.forEach((item) => text += item);
// let fruitMap = fruits.map((item) => (text += item));

// console.log(text);

// reduce
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result);
