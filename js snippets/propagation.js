let container = document.getElementById('container');
const btn = document.getElementById('btn');

// document.querySelectorAll('.heading').forEach(element => {
//   element.addEventListener('click', function() {
//     console.log('you clicked me');
//   });
// });

btn.addEventListener('click', function() {
  let h1 = document.createElement('h1');
  h1.classList.add('heading2');
  h1.textContent = ' i ma a heading';
  container.appendChild(h1);
});
// add click event to dynamically created elements
container.addEventListener('click', function(event) {
  console.log(event.target);
  if (event.target.classList.contains('heading2')) {
    event.target.addEventListener('click', function(event) {
      console.log(event.target.textContent);
    });
  }
});
