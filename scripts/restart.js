var theSPA = theSPA || {};

theSPA.restart = function() {
  theSPA.questionCounter = 0;
  theSPA.responses = [];
document.getElementById("resultsPage").classList.remove('page--active');
document.getElementById("quizPage").classList.remove('page--active');
document.getElementById("startPage").classList.add('page--active');
}
