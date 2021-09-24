class Person {
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Instantiate object
const person1 = new Person('John','Doe', '1-11-1990');
const person2 = new Person('Mary','Smith', '3-9-1987');

console.log(person1.getBirthYear()); 
console.log(person1);


// Single element
//  let ul = document.querySelector('.items');
//  ul.children[1].innerText = 'Brad';
//  ul.lastElementChild.innerHTML = '<h4>Hello</h4>';

//  let btn = document.querySelector('.btn');
//  btn.addEventListener('click', function(e){
//      e.preventDefault();
//      document.querySelector('#my-form').style.background = '#ccc';
//     console.log();
//  });

 let myForm = document.querySelector('#my-form');
 let nameInput = document.querySelector('#name');
 let emailInput = document.querySelector('#email');
 let msg = document.querySelector('.msg');
 let userList = document.querySelector('#users');

 myForm.addEventListener('submit', onSubmit);

 function onSubmit(e) {
     e.preventDefault();

     if (nameInput.value === '' || emailInput.value === '') {
          msg.classList.add('error');
          msg.innerHTML = 'Please enter all fields';

          setTimeout(() => msg.remove(), 3000);
     } else {
         let li = document.createElement('li');
         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
         
         userList.appendChild(li);

         // Clear fields
         nameInput.value = '';
         emailInput.value = '';

     }
 }