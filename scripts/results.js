var theSPA = theSPA || {};

// container is the html ul element where it renders
// var container = document.querySelector('.results-container');


theSPA.reportResults = function(answersArray, responseArray) {
  let result = '';

  responseArray.forEach((studentResponse,i) => {
    const actualAnswer = answersArray[i];
    
    const check = (studentResponse === actualAnswer) ? 
      `<i class="material-icons">done</i>` :
      `! <span class="correct-answer">(${actualAnswer})</span>`;
    result += `<li><span class="student-guess">${studentResponse}</span> ${check}</li>`;
  });
  console.log(result);

  theSPA.resContainer.innerHTML = result;
}
