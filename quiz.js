document.getElementById("startBtn").addEventListener("click", startQuiz);
function startQuiz() {
  var numberStart = 1;
  var numberEnd = 0;
  var numQuestions = 0;
  var randNumber = 0;
  var arr = [];
  //CHECKS FOR WHICH CHECKBOX IS CHECKED THAN SETS NUMBERS FOR RANDOM FUNCTION
  if (document.getElementById("check1").checked === true) {
    numberEnd = 20;
  }

  if (document.getElementById("check2").checked === true) {
    numberEnd = 99;
  }

  if (document.getElementById("check3").checked === true) {
    numberStart = 100;
    numberEnd = 999;
  }

  //SETS INPUT FROM CHOOSE NUMBER OF QUESTIONS TO VARIABLE
  numQuestions = document.getElementById("questions").value;

  //Checks to see if questions text input is blank
  if (document.getElementById("questions").value !== ''){
arr = randArray();
  }
else {
  window.alert("Please enter amount of questions!");
}
 } 
  //Calculates random number based on checkbox and number questions entered in input and returns array
 
function randArray(numberStart, numberEnd, numQuestions) {
  var arr = [];
  var i = 0;

  while (i < numQuestions) {
    randNumber = Math.floor(Math.random() * numberEnd) + numberStart;
    if (arr.indexOf(randNumber) === -1) {
      arr.push(randNumber);
      i++;
    } else if (numQuestions > numberEnd) {
      arr.push(randNumber);
      i++;
    }
  }
  return arr;
}

