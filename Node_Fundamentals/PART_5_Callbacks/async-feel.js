// callbacks/async-feel.js

console.log("1. Start");

setTimeout(() => {
    console.log("3. Inside timeout (ran after 2 seconds)");
}, 2000);

console.log("2. End");

// Output ORDER:
// 1. Start
// 2. End
// 3. Inside timeout  ← runs 2 seconds later