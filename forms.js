let form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  let name = document.getElementById('email');
  let password = document.getElementById('password');
  console.log(
    `the name that you have entered is ${name.value} and the password is ${password.value}`
  );
});
