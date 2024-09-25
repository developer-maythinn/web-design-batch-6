function greet() {
  console.log("Hello");
}
greet();

let myFunc = function () {
  console.log("myFunc");
  return "Hello JS"
};
console.log(myFunc());

function sum(num1 = 5, num2 = 1) {
    console.log(num1, num2)
  return num1 + num2;
}
console.log(sum(2, 4));
console.log(sum(10, 4));
console.log(sum())

(function name(text) {
  console.log(text);
})("John");

let name = myName(); // Hoisting

function myName() {
  console.log("John");
}
