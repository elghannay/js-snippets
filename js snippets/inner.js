let div = document.getElementById('first');
const list = document.getElementById('list');
let newd = document.createTextNode('');
newd.textContent = 'fuck';
div.appendChild(newd);
// toggling styles on press of a button
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  div.classList.toggle('blue');
});
//handling keypress
const input = document.querySelector('input');
input.addEventListener('keypress', () => {
  console.log(input.value);
});
