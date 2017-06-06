// adapted from a script at https://stackoverflow.com/questions/6218494/using-the-html5-required-attribute-for-a-group-of-checkboxes
// var numberSet = [];

function lowerCheck(element) {
  console.log('lowerCheck(): ' + element.value);
  if (Number(element.value) < 0 || isNaN(Number(element.value))) { element.value = 0; };
}

function upperCheck(element) {
  console.log('upperCheck(): ' + element.value);
  if (Number(element.value) < 1 || isNaN(Number(element.value))) { element.value = 1; };
}

function minimumItems(element) {
  console.log('minimumItems(): ' + element.value);
  if (Number(element.value) < 1 || isNaN(Number(element.value))) { element.value = 1; };
}
