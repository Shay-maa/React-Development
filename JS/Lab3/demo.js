function ChangeHTML() {
  var div = document.getElementById("divv");
  div.innerHTML = "<h1> HEEEEEY Man Coding is Amazing</h1>";
}

function ChangeText() {
  var p = document.getElementById("para");
  p.innerText = "Text changed 😉😉";
}
function ChangeContent() {
  var label = document.getElementById("label");
  var p2 = "Hellp from JS";
  label.innerText = p2;
}

function Multiply() {
  var input1 = document.getElementById("input1");
  var input2 = document.getElementById("input2");
  var label = document.getElementById("label");
  label.innerText = parseInt(input1.value) * parseInt(input2.value);
}
function ChangeStyle() {
  var d = document.getElementById("div1");
  var d2 = document.getElementById("div2");

  d.classList.toggle("changeStyle");
  d2.classList.toggle("changeStyle");
}
function Test() {}
