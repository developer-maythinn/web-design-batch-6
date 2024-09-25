// for (let i = 0; i < 100; i++) {
//   console.log("Hello ", i);
// }

// let colors = ["white", "black", "pink", "green", "yellow", "violet"];
// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// for(let color of colors){
//     console.log(color)
// }

// let username = "John";
// for (let name of username) {
//   console.log(name);
// }

// let person = {
//   name: "John",
//   age: 20,
//   city: "Ygn",
// };
// console.log(person["name"]);
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person.color);

// for (let i in person) {
//   console.log(person[i]); // person["name"]
// }

let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    // break;
    continue;
  }
  text += i;
}

document.getElementById("demo").innerHTML = text;
