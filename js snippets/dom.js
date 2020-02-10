document.body.style.backgroundColor = 'blue';
// document.body.style.color = 'red';
document.querySelector('#btn').style.color = 'salmon';
let btn = document.querySelector('#btn'); // notice the pound sign before the btn
btn.addEventListener('click', function() {
  alert('say Hi');
});
console.log(btn.nodeName);
console.log(document.getElementsByTagName('h1'));
// document.getElementsByTagName('h1').style.color = 'black';
h1 = document.getElementsByTagName('h1');
const betterList = [...h1];// we deconstruct it since that dom method will result in
// a node collection 
console.log(betterList);
h1[0].style.color = 'black';
// using a for each on a an object collection
const list = document.getElementsByTagName('li');
const listDeconstructed = [...list]; // convert the object collection to an array so we can use arrays methods
listDeconstructed.forEach(item => {
  item.style.color = 'red';
});
// using a query selector
specialClass = document.querySelectorAll('.special');
console.log(specialClass);
specialClass.forEach(function(item) {
  item.style.color = 'orange';
});
// nodeValue and textContent
let variable = document.querySelector('.special');
// console.log(variable.firstChild.nodeValue);

console.log(variable.textContent);

// get and set attribute
const element = document.getElementById('first');
// const element = document.getElementsByClassName('special');

let element2 = element.nextSibling.nextSibling;
element2.setAttribute('id', 'heby');
console.log(element2);

//className and classList
element.classList.add('hello', 'there', 'my');
element.classList.remove('there');
console.log(element.classList);
console.log(element.className);

let doesContain = element.classList.contains('special');
if (doesContain) console.log('it is here');
else console.log("it's not ");
// create elements with the dom
let result = document.getElementById('div');
let newElements = document.createElement('li');
let text = document.createTextNode('hi i am a list');
newElements.appendChild(text);
newElements.classList.add('var');
result.appendChild(newElements);
//insert before
// document.body.insertBefore(newElements, btn);
let ul = document.getElementById('ul');
let first= document.getElementById('first');
let heby= document.getElementById('heby');
ul.replaceChild(first, heby);
