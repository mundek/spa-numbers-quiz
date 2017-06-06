// adapted from a script at https://stackoverflow.com/questions/6218494/using-the-html5-required-attribute-for-a-group-of-checkboxes
// var numberSet = [];

var theSPA = theSPA || {};

theSPA.lowerCheck = function(element) {
  console.log('lowerCheck(): ' + element.value);
  if (Number(element.value) < 0 || isNaN(Number(element.value))) { element.value = 0; };
}

theSPA.upperCheck = function(element) {
  console.log('upperCheck(): ' + element.value);
  if (Number(element.value) < 1 || isNaN(Number(element.value))) { element.value = 1; };
}

theSPA.minimumItems = function(element) {
  console.log('minimumItems(): ' + element.value);
  if (Number(element.value) < 1 || isNaN(Number(element.value))) { element.value = 1; };
}
