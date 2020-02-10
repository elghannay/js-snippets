// function to determine the odd numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function odd(numbers) {
  let odd = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) odd.push(numbers[i]);
  }
  return odd;
}
// forEach loop
numbers.forEach(function(element, index) {
  console.log(`the first elements is ${element} with an index of ${index + 1}`);
});
// filter array method
let filter = numbers.filter(function(num) {
  return num > 3 && num <= 6;
});
console.log(filter);
// map array method
let map = numbers.map(function(num) {
  return num * 2;
});
console.log(numbers);
console.log(map);

// chaining arrays methods
let fruits = [
  'orange',
  'apple',
  'orange',
  'banana',
  'apple',
  'banana',
  'pear',
  'orange',
  'melon',
  'apple'
]; // this will return only oranges
let chain = fruits
  .filter(function(fruit) {
    return fruit == 'orange';
  })
  .map(function(orange) {
    return `${orange} is on sale`;
  });
console.log(chain);
// reduce simple example
let reduce = numbers.reduce(function(acc, current) {
  acc = acc + current;
  console.log(current);
  return acc;
}, 0);
console.log(reduce);
// reduce fruits filter example > returns an array
const reduce2 = fruits.reduce(function(acc, current) {
  if (acc.indexOf(current) == -1) acc.push(current);
  return acc;
}, []);

console.log(reduce2);
// reduce method that returns an object of how many fruits of each type
const reduce3 = fruits.reduce(function(acc, current) {
  if (acc[current]) acc[current]++;
  // if the value does not exist this
  // expression will result in undefined and > that is falsy
  else acc[current] = 1;
  return acc;
}, {});
console.log(reduce3);
//passing object as parameters to functions
function greet({ name, greeting }) {
  return `${greeting} ${name}`;
}

let hi = greet({ name: 'mohamed', greeting: 'hello there' });
console.log(hi);
// the average of the class function
let scores = [
  { name: 'john', score: 80 },
  { name: 'giga', score: 70 },
  { name: 'bruce', score: 68 },
  { name: 'mohamed', score: 90 }
];
let totalScore = 0;

for (let i = 0; i < scores.length; i++) {
  totalScore = totalScore + scores[i].score;
}
console.log(totalScore);
let average = totalScore / scores.length;
console.log(average);
let betterThanAverage = false;
for (let i = 0; i < scores.length; i++) {
  if (scores[i].score > average) {
    betterThanAverage = true;
    scores[i].betterThanAverage = betterThanAverage;
  } else {
    betterThanAverage = false;
    scores[i].betterThanAverage = betterThanAverage;
  }
}
console.log(scores);
