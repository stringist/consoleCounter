"use strict";

let numbers = [0];
const max = 9;
console.log(numbers);
count();

// function count() {
//     console.log(numbers);
//     if (numbers.length <= 9) {
//         numbers.forEach(function(number) {
//             numbers.push(number + 1);
//         });
//         setTimeout(() => { console.log(numbers) }, 1000);
//     } else count();
// }
function count() {
    console.log(numbers);
    numbers.forEach(function(number) { numbers.push(number++); })
    if (numbers.length <= max) {
        setTimeout(console.log(numbers), 1000);
    }
    console.log(numbers);
    // count();
}