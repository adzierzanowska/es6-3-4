// ZADANIE PIERWSZE //

const a = "Hello";
const c = "World";

console.log(`${a} ${c}`);

//ZADANIE DRUGIE//

const multiply = (x = 1, y = 1) => console.log(`${x} x ${y} = ${x * y}`)

multiply(9, 7);
multiply(4);

//ZADANIE TRZECIE//
const average = (...args) => console.log(args.reduce((a, b) => a + b) / args.length);

average(4, 5, 5, 2);
average(2);

//ZADANIE CZWARTE//
console.log("ZADANIE 4");
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);

//ZADANIE PIĄTE//
console.log("ZADANIE 5");
const data = [1, 4, 'Iwona', false, 'Nowak'];

const [,, firstName,, lastName] = data;

console.log(`${firstName} ${lastName}`);

