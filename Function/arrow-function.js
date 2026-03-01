const prompt = require('prompt-sync')();

add= (a,b)=> a+b;
console.log(add(3,6));
 //ADD
let m=Number(prompt("Enter Your !st NUmber:"));
let n=Number(prompt("Enter Your 2nd NUmber:"));

additon = (m,n) => m+n;
console.log(additon(m,n));
//deleted
let p=Number(prompt("Enter Your !st NUmber:"));
let q=Number(prompt("Enter Your 2nd NUmber:"));
remove = (p,q) => p-q;
console.log(remove(p,q));

//Multi
let x=Number(prompt("Enter Your !st NUmber:"));
let y=Number(prompt("Enter Your 2nd NUmber:"));

multi = (x,y) =>  x*y;
console.log(multi(x,y));

const great = (A,B) =>{
    if(A>B)
        return "A Is Grator";
    else
        return "B is Grator";
}
console.log(great(5,4));