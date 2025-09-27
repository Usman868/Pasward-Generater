// Pasward Generater

var lengthValue = document.getElementById("length");
var range = document.getElementById("length-range");
var output = document.getElementById("pasward-output");

// update slider value in real time
range.addEventListener("input", function realtimelength() {
  lengthValue.textContent = range.value;
});

// pasward gnerater function
function paswardGenerater() {
  var length = parseInt(range.value);
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeNumbers = document.getElementById("numbers").checked;
  var includeSymbols = document.getElementById("symbols").checked;

  var lo_Case = "abcdefghijklmnopqrstuvwxyz";
  var up_Case = lo_Case.toUpperCase();
  var numbers = 1234567890;
  var symbols = "! @ # $ % ^ & * - _ +";
  var allitems = "";

  if (includeUppercase) {
    allitems += up_Case;
  }
  if (includeLowercase) {
    allitems += lo_Case;
  }
  if (includeNumbers) {
    allitems += numbers;
  }
  if (includeSymbols) {
    allitems += symbols;
  }
  
  if (allitems === "") {
    output.innerText = "⚠ Please select at least one option!";
    output.className += " colour"
    return;
  }else{
    output.className = "user-pasward";
  }

  var pasward = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * allitems.length);
    pasward += allitems[randomIndex];
  }
  output.innerText = pasward;
}
