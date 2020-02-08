let array = ['john  ', 'anna', 'mizok'];
let stringified = JSON.stringify(array);
localStorage.setItem('name', stringified);
// sessionStorage.setItem('name', 'elghannay');

const value = JSON.parse(localStorage.getItem('name'));
console.log(value[0]);

let fruits;
if (localStorage.getItem(fruits) == null) {
  fruits = [];
} else JSON.parse(localStorage.getItem('fruits'));
fruits.push('apple');
fruits.push('lemon');
fruits.push('lemon');
localStorage.setItem('fruits',JSON.stringify(fruits));
console.log(fruits);
