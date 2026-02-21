const prompt = require('prompt-sync')();

//1st method
let num1 = Number(prompt("Enter your Number"));
let num2 = Number(prompt("Enter your Number"));
let num3 = Number(prompt("Enter your Number"));
if(num1>num2 && num1>num3){
    largest=num1;
} else if(num2>num1 && num2>num3){
    largest=num2;
}else{
    largest=num3;
} 
console.log(largest);