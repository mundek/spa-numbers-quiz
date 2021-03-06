var theSPA = theSPA || {};

theSPA.questionCounter = 0;
theSPA.responses = [];

theSPA.sayNumber = function() {
  var numString = this.itemsArr[this.questionCounter].toString() || "";
  responsiveVoice.speak(numString, 'Spanish Latin American Female');
};

theSPA.advance = function() {
  var userInput = document.getElementById("userResponse");
  theSPA.responses.push(Number(userInput.value));
  theSPA.progIndicator.innerHTML = "<h2>"
    + (theSPA.questionCounter + 1)
    + " / "
    + this.itemsArr.length
    + "</h2>";
  theSPA.questionCounter++;

  if (theSPA.questionCounter >= this.itemsArr.length) {
  	// make results page visible, make quiz page invisible
		document.getElementById("quizPage").classList.remove('page--active');
    document.getElementById("resultsPage").classList.add('page--active');

  	console.log(theSPA.responses);
		
		theSPA.reportResults(this.itemsArr, this.responses);
  } else {
    userInput.value = "";
    theSPA.sayNumber();  
  }
}

// Finish quiz by advancing to the last (results) section
// Add button to end quiz early