function stringToArray(string) {
  let result = string.split(' ');
  console.log('the resulted array is :', result);
}
function arrayToString(array){
  array.join()
}
stringToArray('i am making progress');
function joins() {
  let array = ['this', 'is', 'my', 'dfooo'];
  let result = array.join(',');
  console.log('the resulted string is :', result);
}
// joins();

// finding out the longest element if you have a string just use a split() on it

function longest(arr) {
  let longest = '';
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) longest = arr[i];
  }
  console.log(longest);
}
longest(['this', 'issdddddddddddddd', 'my', 'dfooosdddddddddddddddddd']);
