const arr = [4, 5, 8, 68, 79, 1];

let smallest = arr[0];
let largest = arr[0];
let sum = 0;

for (const n of arr) {
  if (n < smallest) smallest = n;
  if (n > largest)  largest = n;
  sum += n;
}

console.log("Array:", arr);
console.log("Smallest:", smallest); 
console.log("Largest:", largest);   
console.log("Sum:", sum);           