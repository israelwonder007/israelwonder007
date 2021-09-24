// GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// headerTitle.innerHTML = '<h3>Hello</3>';
// header.style.borderBottom = 'solid 3px #ccc';

// GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow'; 

// // To change the backgroung-color for "items", you need a for-loop...
// for (let index = 0; index < items.length; index++) {
//     items[index].style.backgroundColor = '#f4f4f4';

// }

// // QUERYSELECTOR
// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let index = 0; index < odd.length; index++) {
//     odd[index].style.background = '#f4f4f4';
//     even[index].style.background = '#ccc';

// }

// TRAVERSING THE DOM
let itemList = document.querySelector('#items');
// parentNode
// console.log(itemList);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode);

// childNode
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = "yellow";

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement
// Create a div
// let newDiv = document.createElement('div');

// // Add class and id
// newDiv.className = 'hello';
// newDiv.id = 'welcome';

// // Add attr
// newDiv.setAttribute('title', 'Hello Div');

// // create text node
// let newDivText = document.createTextNode('Hello world');

// // Add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';
// // insertBefore, takes two parameter, the one you wish to insert and the below...
// container.insertBefore(newDiv, h1);

// EVENTS

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('Button click');
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.backgroungColor = '#f4f4f4';

// console.log(e);

// console.log(e.target);
// console.log(e.target.id);
// console.log(e.target.className);
// console.log(e.target.classList);

// let output = document.getElementById('output');
// output.innerHTML = '<h3>'+e.target.id+'</h3>';
// console.log(e.type);


// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// }

let button = document.getElementById('button');
let box = document.getElementById('box');

// button.addEventListener('click', runEvents);
// button.addEventListener('dblclick', runEvents);
// button.addEventListener('mousedown', runEvents);
// button.addEventListener('mouseup', runEvents);

// box.addEventListener('mouseenter', runEvents);
// box.addEventListener('mouseleave', runEvents);

// box.addEventListener('mouseover', runEvents);
// box.addEventListener('mouseout', runEvents);

// box.addEventListener('mousemove', runEvents);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemList.addEventListener('click', runEvents);

// itemInput.addEventListener('keydown', runEvents);
// itemInput.addEventListener('keypress', runEvents);

// itemInput.addEventListener('focus', runEvents);
// itemInput.addEventListener('blur', runEvents);

// select.addEventListener('change', runEvents);

form.addEventListener('submit', runEvents);

function runEvents(e) {
    // e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    // console.log(e.target.classList);
    // console.log(e.target.class);
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';

    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
    // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";

}