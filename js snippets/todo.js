let todo = [];
function addItem(arr) {
  let answer = prompt('what would like to do for today');
  let correct = answer.toLowerCase().trim();
  if (!isDuplicate(arr, correct)) {
    arr.push(correct);
  } else alert('the item does exist');
}
function isDuplicate(arr, item) {
  let doesExist = false;
  let index = arr.indexOf(item);
  if (index == -1) {
    doesExist = false;
  } else {
    doesExist = true;
  }
  return doesExist;
}
// remove items from the todo list
function removeItem(arr) {
  let answer = prompt('what item have you finished and you want to delete');
  let correct = answer.toLowerCase().trim();
  if (isDuplicate(arr, correct)) {
    console.log(`the removed item is "${arr[arr.indexOf(correct)]}"`);
    arr.splice(arr.indexOf(correct), 1);
  } else alert('their is no such item in your todo list');
}
// display the function on the html
function showItems(arr) {
  document.write('your to list has :\n');
  for (let i = 0; i < arr.length; i++) {
    document.write(`${arr[i]} \n`);
  }
}
addItem(todo);
addItem(todo);
addItem(todo);
addItem(todo);
// console.log(todo);
// removeItem(todo);
// console.log(todo);
showItems(todo);
