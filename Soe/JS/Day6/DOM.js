// console.log(document.body);
// console.log(document.title);

// let myDiv = document.createElement("div");
// let textNode = document.createTextNode("Hello JS");

// console.log(myDiv); // <div></div>

// myDiv.appendChild(textNode);

// console.log(myDiv); // <div>Hello JS</div>
// let bodyElement = document.body;
// bodyElement.appendChild(myDiv);

// let demo = document.getElementById("demo");
// demo.innerHTML = "Javascript";
// console.log(demo);

// let h1Tags = document.getElementsByTagName("h1")[1];
// console.log(h1Tags);

let introClass = document.getElementsByClassName("intro");
// introClass.style.color = "red";
// introClass.style.backgroundColor = "green";

// introClass[0].style.cssText = `color: blue; background-color: pink`;
// introClass[1].style.cssText = `color: blue; background-color: pink`;
// introClass[2].style.cssText = `color: blue; background-color: pink`;
// introClass[3].style.cssText = `color: blue; background-color: pink`;

for (let item of introClass) {
  item.style.cssText = `color: #fff; background-color: brown; margin: 10px 0`;
}
console.log(introClass);

// console.log(document.querySelector(".intro"));
// console.log(document.querySelectorAll("h2.intro"));
