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
	theSPA.responses.push(Number(userInput.value))
	theSPA.questionCounter++;
	
	userInput.value = "";
	
}

// Finish quiz by advance to the last (results) section

// Add button to end quiz early

