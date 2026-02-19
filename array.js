let student = ["Rakib","Shakib","Akib","fahim","Said","Tanjil"];
console.log(student);
console.log([3]);   //er index number er maddhome specic item pawa jay.
console.log(typeof student)   // typeof er maddhome data type jana jay

let student2=["Rakib","Shakib","Akib","fahim","Said","Tanjil"];
student2.push("Saif");  // push er maddome kono item k last add kora jay
console.log(student2);
student2.unshift("Rakibbaaa");
console.log(student2);

// kono item remove korar jonno pop(last er dik theke) and shift(first er dik theke) use kora hoy

let student3= ["Tanim","Tanisha","Ayesha","Ayan","Tasnim","Fatema","Nadiya"];

student3.pop();         //last er dik theke remove
console.log(student3);  

student3.shift();           //frist dik theke remove
console.log(student3);
