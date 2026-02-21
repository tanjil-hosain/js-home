//Join Array

let letter = ["A","B","C","D","E","F","G"];
console.log(letter);

let new_letter = letter.join("&") // er maddome prottek item er sathe jog hoy>.
console.log(new_letter);

let n_letter= letter.join(",")
console.log(n_letter);


//Concat Array
// concat er maddhome 2 ba totodik ereke jog kore ekta array banano jay
let student_id =[1,2,3,4,5,6,7,8,9,10];
let student_name=["Tanjil","Tanim","Tanisha","Tasnim","Ayesha","Ayat","Ayan","Anisha","Fatrma","Nadiya"];
let student_grade=["A+","A","B","C","D","A","B","C","D","A"];
let student_result=student_id.concat(student_name,student_grade);  
console.log(student_result);
