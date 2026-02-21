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

//2nd method
let numbers =[]; 
let total_input=Number(prompt("Enter Your Input Number:"));
 for(let i =0; i < total_input; i++){
let input= Number(prompt(`Enter your ${i+1}nd Number: `))
numbers.push(input);
    
}
let max = Math.max(...numbers);
console.log(`The maximum number is: ${max}`);
