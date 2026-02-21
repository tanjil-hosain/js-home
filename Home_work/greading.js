const prompt = require('prompt-sync')();

let marks=Number(prompt("Enter your Persentige:"));
if (marks >= 80) {
    console.log( "A+");
} else if (marks >= 70) {
    console.log("A") ;
} else if (marks >= 60) {
    console.log("B") ;
} else {
    console.log("Below B") ;
}