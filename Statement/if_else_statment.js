//  if(condition){
//             //STATEMENT         <!--True statment-->
//         } else{
//             //STATEMENT           <!--False statment-->
//         }
const prompt = require('prompt-sync')();


let num1=100;
let num2=50;
if(num1>num2){
    console.log("Apni Sothik!");
} else{
    console.log("Apni Mittha!");
}
//----------------------------
if(num1<num2){
    console.log("Apni Sothik!");
} else{
    console.log("Apni Mittha!");
}

let num3=Number( prompt("Enter your number"));
if(num3>10){
    console.log("this is true");
} else{
    console.log("this is false");
}

//---------------------
//Even or odd Number 
let num5=Number(prompt("Please Enter Your Number:"));
if (num5 %2===0){
    console.log("This Is even number")
} else{
    console.log("This is Odd number")
}