// Switch & Case bebohar kore grade nirnoy---->>>>>>
const prompt = require('prompt-sync')();

let marks = Number(prompt("Please Enter Your Marks:"));
switch(true){
    case(marks>100):
    console.log("This Mark is invalid");
    break;

    case(marks>=80):
    console.log("A+");
    break;

    case(marks>=70):
    console.log("A");
    break;

    case(marks>=60):
    console.log("A-");
    break;

    case(marks>=50):
    console.log("B");
    break;

    case(marks>=40):
    console.log("C");
    break;

    case(marks>=33):
    console.log("D");
    break;

    default:
        console.log("F");
}