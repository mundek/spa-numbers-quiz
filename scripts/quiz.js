var theSPA = theSPA || {};

theSPA.questionCounter = 0;
theSPA.responses = [];

theSPA.sayNumber = function() {
  console.log(this.arr[this.questionCounter]);
  var numString = this.arr[this.questionCounter].toString();
  responsiveVoice.speak(numString, 'Spanish Latin American Female');
};

theSPA.advance = function() {
  var userInput = document.getElementById("userResponse");
  theSPA.responses.push(Number(userInput.value));
  theSPA.questionCounter++;
  console.log(this.arr.length + " | " + theSPA.questionCounter);
  if (theSPA.questionCounter >= this.arr.length) {
	// make results page visible, make quiz page invisible
	document.getElementById("quizPage").classList.remove('page--active');
    document.getElementById("resultsPage").classList.add('page--active');
	console.log(theSPA.responses);
  }

  userInput.value = "";	
}

// Finish quiz by advance to the last (results) section

// Add button to end quiz early

