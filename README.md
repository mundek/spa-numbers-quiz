# spa-numbers-quiz

## developers
To change what page it defaults to just move the "page--active" class from whatever section it is on... to the section (or 'page') that you want to be working with.

To display the results pass an array of objects to the Results function and it'll populate the results list
The array should look something like this:
var quiz = [{
  studentGuess: 22,
  answer: 23
},{
  studentGuess: 11,
  answer: 11
}];
