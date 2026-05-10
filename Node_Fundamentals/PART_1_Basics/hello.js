// FIRST SIMPLE PROGRAM -----------

const message = "Hello from Node.js!";
console.log(message);

console.log("Node version:", process.version); 
console.log("Operating System:" + process.platform);
console.log("Current Directory:", process.cwd);


// REPL = Read, Evaluate, Print, Loop.
// we just need to type "node" in terminal, and we can work inside a REPL, it is great for quickly testing without creating a file.