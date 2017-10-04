var theSPA = theSPA || {};

theSPA.startQuiz = function() {

  var numberStart = 1;
  var numberEnd = 0;
  var numQuestions = 0;
  var randNumber = 0;
  this.itemsArr = [];
  this.questionCounter = 0;
  this.responses = [];

  var theFloor = Number(document.getElementById("lowerBound").value);
  var theCeiling = Number(document.getElementById("upperBound").value);
  var listLength = Number(document.getElementById("numberOfItems").value);

  theSPA.progIndicator = document.getElementById("scoreboard");
  theSPA.progIndicator.innerHTML = "<h2></h2>";
  theSPA.resContainer = document.getElementById("resCont");
  theSPA.resContainer.innerHTML = "<h3>Hi!!!!</h3>";

  // DO SOME SOFT ERROR CHECKING (FAIL GRACEFULLY)
  if (listLength < 1 || isNaN(listLength)) { listLength = 1; };
  if (theFloor < 0 || isNaN(theFloor)) { theFloor = 0; };
  if (theCeiling < 0 || isNaN(theCeiling)) { theCeiling = 1; };
  if (theFloor > theCeiling) {
    var buffer = theFloor;
    theFloor = theCeiling;
    theCeiling = buffer;
  };

  theSPA.progIndicator.innerHTML = "<h2>0 / "
    + listLength
    + "</h2>";

  this.itemsArr = this.randArray(theFloor, theCeiling, listLength);

  // make start page invisible
  document.getElementById("startPage").classList.remove('page--active');

  // make results invisible (for restart scenario)
  document.querySelector("#resultsPage").classList.remove('page--active');

  // make quiz section visible
  document.getElementById("quizPage").classList.add('page--active');

  theSPA.sayNumber();
}

// Calculates list of random numbers
theSPA.randArray = function(theFloor, theCeiling, listLength) {
  var listArr = [];
  var i = 0;

  while (i < listLength) {
    randNumber = Math.floor(Math.random() * (theCeiling - theFloor + 1) + theFloor);
  	// Don't allow two numbers in a row to be the same
    if(randNumber !== listArr[i-1]) {
	    listArr.push(randNumber);
      i++;
	  }
  }
  return listArr;
}
