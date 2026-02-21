const prompt = require('prompt-sync')();

let num1=[20,100,50];
num1.sort(function(a,b){
    return b-a;
})
console.log(num1);

let numbers=[];
let total_input=Number(prompt("Enter Your Input:"));
for(let i =0; i < total_input; i++){
    let input=Number( prompt(`Enter your ${i + 1}nd Number:`));
    numbers.push(input);
}

numbers.sort(function(a,b){
    return b-a;
})
console.log("Sorted  Numbers:",numbers);

