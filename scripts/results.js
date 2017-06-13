var theSPA = theSPA || {};

// container is the html ul element where it renders
const container = document.querySelector('.results-container');

theSPA.Results = (answersArray, responseArray) => {
  let result = '';

  responseArray.forEach((studentRespose,i) => {
    const actualAnswer = answersArray[i];
    
    const check = (studentRespose === actualAnswer) ? 
      `<i class="material-icons">done</i>` :
      `! <span class="correct-answer">(${actualAnswer})</span>`
    result += `<li><span class="student-guess">${studentRespose}</span> ${check}`;
  });

  container.innerHTML = result;
}
