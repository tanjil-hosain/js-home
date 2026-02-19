//Slice method
const letter=["A","B","C","D","E","F"];

let a =letter.slice(2,4); //eta cake er moto kaj kore, joto tuku bole diba tar age pore sob fele dibe
console.log(a);
let b = letter.slice(2); // singel dile index er ag porjoto remove kore
console.log(b);

//Splice method

let weak=["Sunday","Monday","Wednesday","Thursday"];
 weak.splice(1,0,"Saturday");
console.log(weak);
let month=["january","february","march","april"]
month.splice(3,1,"April","May","June ","July")
console.log(month);