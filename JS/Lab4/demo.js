function goToGoogle() {
  location.href = "https:www.google.com.eg/";
}
function downloadFun() {
  var msg = document.querySelector(".message");
  var span = document.getElementById("span1");
  msg.style.display = "block";
  setTimeout(function () {
    span.style.display = "block";
    msg.style.display = "none";
  }, 3000);
}
var myInterval;
var i = 0;
function startcount() {
  var span = document.getElementById("span2");
  myInterval = setInterval(function () {
    span.innerHTML = i++;
  }, 1000);
}

function stopcount() {
  clearInterval(myInterval);
}
var newWin;

function openNewWindow() {
  newWin = window.open("about.html", "", "width=400 , height = 200");
}
function closeWindow() {
  newWin.close();
}
function moveToWindow() {
  newWin.moveTo(500, 200);
  newWin.focus;
}
function moveByWindow() {
  newWin.moveBy(100, 100);
  newWin.focus();
}
function resizeToWindow() {
  newWin.resizeTo(400, 400);
}
function resizeByWindow() {
  newWin.resizeBy(100, 100);
}
