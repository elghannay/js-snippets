let quiz = [
  ['what is the best state to live in', 'ca'],
  ['what is my favorite beach', 'restinga'],
  ['how old i am', 26]
];

let score = 0;
for (let i = 0; i < quiz.length; i++) {
  let answer = prompt(quiz[i][0]);
  let corrected = answer.toLowerCase().trim();
  if (corrected == quiz[i][1]) score++;
  else alert(`the correct answer is ${quiz[i][1]} `);
}
let percentage = ((score / quiz.length) * 100).toFixed(2);
alert(`your score is ${score} and your correct answers percentage is ${percentage}%`);
