//if else if bebohar kore grade program

const prompt = require('prompt-sync')();

let marks=Number(prompt("Plaese Enter Your Marks:"));
if(marks>100){
    console.log("This is Invalid Marks");
}else if(marks>=80){
    console.log("A+");
} else if(marks>=70){
    console.log("A");
}  else if(marks>=60){
    console.log("A-");
} else if(marks>=50){
    console.log("B");
}else if(marks>=40){
    console.log("C");
} else if (marks>=33){
    console.log("D");
}else{
    console.log("F");
}