const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.type);
});


