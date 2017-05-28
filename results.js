// expect model that looks like

model = [{
  studentGuess: 1001,
  answer: 1011
},{
  studentGuess: 333,
  answer: 323
},{
  studentGuess: 500,
  answer: 500
}];

// container is the html ul element where it renders
const container = document.querySelector('.results-container');

const Results = (model) => {
  let result = '';

  model.forEach(x => {
    const check = (x.studentGuess === x.answer) ? 
      `<i class="material-icons">done</i>` :
      `! <span class="correct-answer">(${x.answer})</span>`
    result += `<li><span class="student-guess">${x.studentGuess}</span> ${check}`;
  });

  container.innerHTML = result;
}

Results(model);
