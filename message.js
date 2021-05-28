var array = [];
 function organizeNumbers() {
  var getValues = document.getElementById("number-input").valueAsNumber;
  array.push(getValues);

};



function sortNumbers () {
  array.sort();
  alert(array);
};



