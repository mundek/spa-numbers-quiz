var theSPA = theSPA || {};

theSPA.startQuiz = function() {

  var numberStart = 1;
  var numberEnd = 0;
  var numQuestions = 0;
  var randNumber = 0;
  this.arr = [];

  // CHECKS FOR WHICH CHECKBOX IS CHECKED THEN SETS NUMBERS FOR RANDOM FUNCTION
  // NO ERROR CHECKING TO SEE IF INPUT IS EVEN A NUMBER

  var theFloor = Number(document.getElementById("lowerBound").value);

  var theCeiling = Number(document.getElementById("upperBound").value);
  
  var listLength = Number(document.getElementById("numberOfItems").value);

  // console.log("theFloor: " + theFloor);
  // console.log("theCeiling: " + theCeiling);
  // console.log("listLength: " + listLength);

  // DO SOME SOFT ERROR CHECKING (FAIL GRACEFULLY)
  if (listLength < 1 || isNaN(listLength)) { listLength = 1; };
  if (theFloor < 0 || isNaN(theFloor)) { theFloor = 0; };
  if (theCeiling < 0 || isNaN(theCeiling)) { theCeiling = 1; };
  if (theFloor > theCeiling) {
    var buffer = theFloor;
    theFloor = theCeiling;
    theCeiling = buffer;
  };

  console.log("theFloor: " + theFloor);
  console.log("theCeiling: " + theCeiling);
  console.log("listLength: " + listLength);

  if (listLength !== "" && isNaN(listLength) === false) {
    this.arr = this.randArray(theFloor, theCeiling, listLength);
    console.log(this.arr);
  } else {
    window.alert("Please enter a number!");
  }

  document.getElementById("startPage").classList.remove('page--active');
  document.getElementById("quizPage").classList.add('page--active');
}
//  Calculates random number based on checkbox and number questions entered in input and returns array

theSPA.randArray = function(theFloor, theCeiling, listLength) {
  var arr = [];
  var i = 0;

  while (i < listLength) {
    randNumber = Math.floor(Math.random() * (theCeiling - theFloor + 1) + theFloor);
	// Don't allow to numbers in a row to be the same
    if(randNumber !== arr[i-1]) {
	  arr.push(randNumber);
      i++;
	}
  }
  return arr;
}
