// problem1

var num1 = parseInt(prompt("Enter Number1"));
var num2 = parseInt(prompt("Enter Number2"));
num1 > num2
  ? document.writeln("The Larger Number is " + num1)
  : document.writeln("The Larger Number is " + num2);
document.writeln("<br>");
// problem2

var num3 = parseInt(prompt("Enter Number1 "));
var num4 = parseInt(prompt("Enter Number2 "));
res = num3 + num4;
num3 !== num4 ? document.writeln(res) : document.writeln(res * 3);
document.writeln("<br>");

//problem 3

var fname = prompt("Enter Ur Name");
var counter = parseInt(prompt("Enter the number "));

for (var i = 0; i < counter; i++) {
  document.writeln("Hello " + fname + "<br>");
}

//problem4

var num5 = parseInt(prompt("Enter Number "));
num5 % 2 == 0
  ? alert("the result will be this number " + num5 + " is Even")
  : alert("the result will be this number " + num5 + " is Odd");
