// let person = {
//     name: "Daniel",
//     eyeColor: "Blue",
//     age: 27,
//     updateAge:  function() {
//         return ++person.age;
//     }
// }
// console.log(person);

// let box = document.querySelector(".box");
// let newElement = document.createElement("a");
// let newContent = document.createTextNode("This is a link!");
// newElement.appendChild(newContent);
// box.appendChild(newElement);
// newElement.setAttribute("href", "www.google.com");

let box = document.querySelector(".box");
let newElement = document.createElement("a");
newElement.append("This is a link!");
box.appendChild(newElement);
newElement.setAttribute("href", "www.google.com");
document.querySelector("h1").style.cssText = "color: blue; font-size: 40px";


// This is for Menu

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

menu.style.marginLeft = "-300px";

function menuToggle() {
    if (menuStatus == false) {
        menu.style.marginLeft = "0px";
        menuStatus = true;
    } else if (menuStatus == true) {
        menu.style.marginLeft = "-300px";
        menuStatus = false;
    }
}
    // menuBtn.onclick = menuToggle;