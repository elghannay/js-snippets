setInterval(function() {
  alert('hello there');
}, 2000);

setTimeout(() => {
  alert('hello there');
}, 2000);

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filter = array.filter(num => {
  return num % 2 === 0;
});
console.log(filter);

let btn = document.getElementById('btn')
btn.addEventListener('click',show)
function show(){
    alert('this is an alert bitch')
}