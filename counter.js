"use strict";
window.addEventListener("load", count);

let counter = 0;
const numbers = [0];

function count() {
    console.log(numbers);
    counter++;
    if (numbers.length < 9) {
        numbers.unshift(counter);
    } else {
        numbers.unshift(counter);
        numbers.length = 9;
    }
    setTimeout(count, 1000);
}

// this one is 90% there, just doesn't keep counting on line 9

// function count() {
//     console.log(numbers);
//     counter++;
//     numbers.unshift(counter);
//     if (numbers.length <= 9) {
//         setTimeout(count, 100);
//     }
//     // setTimeout(count, 1000);
// }
// function count() {
//     console.log(numbers);
//     if (numbers.length <= 9) {
//         numbers.forEach(function(number) {
//             numbers.push(number + 1);
//         });
//         setTimeout(() => { console.log(numbers) }, 1000);
//     } else count();
// }
// function count() {
//     // console.log(numbers);
//     numbers.forEach(function(number) { numbers.push(number + 1); })
//     if (numbers.length <= max) {
//         setTimeout(count, 10000);
//     }
//     console.log(numbers);
// }

// function count() {

//     if (numbers.length <= 9) {
//         numbers.forEach(function(number) {
//             numbers.push(number++1);
//             // setTimeout(console.log(numbers), 10000);
//         });
//     }
//     console.log(numbers);
//     setTimeout(count, 10000);
//

// }