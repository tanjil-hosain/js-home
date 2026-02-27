const prompt = require('prompt-sync')();

//Assending Order
let a = (Number(prompt("Enter a number:")));
let b = (Number(prompt("Enter a number:")));
let c = (Number(prompt("Enter a number:")));
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    temp = c;
    c = a;
    a = temp;
}
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}
console.log(a + "," + b + "," + c);