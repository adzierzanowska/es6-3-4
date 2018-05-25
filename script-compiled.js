"use strict";

// ZADANIE PIERWSZE //

var a = "Hello";
var c = "World";

console.log(a + " " + c);

//ZADANIE DRUGIE//

var multiply = function multiply() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return console.log(x + " x " + y + " = " + x * y);
};

multiply(9, 7);
multiply(4);

//ZADANIE TRZECIE//
var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return console.log(args.reduce(function (a, b) {
    return a + b;
  }) / args.length);
};

average(4, 5, 5, 2);
average(2);

//ZADANIE CZWARTE//
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average.apply(undefined, grades));

//ZADANIE PIĄTE//
var data = [1, 4, 'Iwona', false, 'Nowak'];

var firstName = data[2],
    lastName = data[4];


console.log(firstName + " " + lastName);
