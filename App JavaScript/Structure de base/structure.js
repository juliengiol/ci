function formUpdate() {
  var m = document.getElementById("howMany").value;
  document.getElementById("displayHowMany").innerHTML = m;
  if (m == 3) {
    document.getElementById("displayNumber3").innerHTML = "Number 3: <input type='number' id='number3' value=10 onchange='compute()'>";
  }
  if (m == 2) {
    document.getElementById("displayNumber3").innerHTML = "";
  }
  compute()
}

function compute() {
  var m = document.getElementById("howMany").value;
  var n1 = parseInt(document.getElementById("number1").value);
  var n2 = parseInt(document.getElementById("number2").value);
  var sum = n1 + n2;
  if (m == 3) {
    var n3 = parseInt(document.getElementById("number3").value);
    sum = sum + n3
  }
  var average = sum / m;
  document.getElementById("displayAverage").innerHTML = average
}
