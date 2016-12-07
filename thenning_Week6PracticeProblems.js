function sumWhile() {
  var i = 0;
  var sum = 0;
  while (i <= 100) {
    var sum = sum + i;
    i++;
  }
  document.write(sum);
}

function sumDoWhile() {
  var i = 0;
  var sum = 0;
  do {
    var sum = sum + i;
    i++;
  }
  while (i <= 100)
  document.write("<br>" + sum);
}

function sumFor() {
  var i = 0;
  var sum = 0;
  for (var i = 0; i <= 100; i++) {
    var sum = sum + i;
  }
  document.write("<br>" + sum);
}

function fizzBuzz() {
  var i = 0;  
  while (i <= 100) {
    isEven(i);
    i++;
  }
}

function isEven(i) {
  if (i % 2 === 0) {
      document.write("<br>" + i + " is even: Fizz");
    }
    else {
      document.write("<br>" + i + " is odd: Buzz");
    }
}

function asciiTable() {
  var i = 0;
  while (i <= 250) {
    var hexString = i.toString(16);
    var asciiString = String.fromCharCode(i);
    document.write("<br>" + i + ", " + hexString + ", " + asciiString);
    i++;
  }
}

function arrayTest(x) {
  if (x.length > 0) {
    document.write("<br>Array is not empty");
  }
  else {
    document.write("<br>Array is empty")
  }
}

function arrayElements(x) {
  var arrayFirst = x[0];
  var arrayThird = x[2];
  var arrayLast = x[x.length - 1];
  x.splice(1,1,6);
  x.splice(3,0,100,101,102);
  var first5Elements = x.slice(0,5);

  document.write("<br>" + first5Elements); 
}

function emailAddresses() {
  var loops = Number(prompt("How many email adresses do you wish to enter?"));
  var i = 0;
  var emails = [];
  while(i < loops) {
    emails.push(prompt("Enter email " + (i + 1)));
    i++;
  }
  document.write("<br>Emails: " + emails)
}

function bubbleSort(x) {
  x.sort(function(a, b){return a-b});
  document.write("<br>Numbers sorted from lowest to highest: " + x);
}