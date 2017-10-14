var theSPA = theSPA || {};

theSPA.reviewAnswer = function (num) {
  const numString = num.toString();
  responsiveVoice.speak(numString, 'Spanish Latin American Female');
}

// container is the html ul element where it renders
// var container = document.querySelector('.results-container');


theSPA.reportResults = function(answersArray, responseArray) {
  let result = '';

  responseArray.forEach((studentResponse,i) => {
    const actualAnswer = answersArray[i];

    const check = (studentResponse === actualAnswer) ?
      `<i class="material-icons">done</i>` :
      `! <span class="correct-answer">(${actualAnswer})</span>`;
    result += `<li>
      <span class="student-guess">${studentResponse}</span>
      ${check}
      <button onclick="theSPA.reviewAnswer(${studentResponse.toString()})">Your answer</button>
      <button onclick="theSPA.reviewAnswer(${actualAnswer.toString()})">Correct answer</button>
    </li>`;
  });


  theSPA.resContainer.innerHTML = result;

}
