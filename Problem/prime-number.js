   const prompt = require('prompt-sync')();
//    let num =Number(prompt("Input your Number")) ;
//    let count = 0;
//         if (num == 0 || num == 1) {
//             console.log("Not Prime or Composite");
//         } else {
//             for (i = 2; i < num; i++) {
//                 if (num % i == 0) {
//                     count++;
//                     break;
//                 }
//             }
//             if (count == 0) {
//                 console.log("Prime");
//             } else {
//                 console.log("not Prime");
//             }
//         }

let num =Number(prompt("Input your Number")) ;
   let count = 0;
        if (num <=1) {
            console.log("Not Prime or Composite");
        } else {
            for (i = 2; i < num; i++) {
                if (num % i == 0) {
                    count++;
                    break;
                }
            }
            if (count == 0) {
                console.log("Prime");
            } else {
                console.log("not Prime");
            }
        }