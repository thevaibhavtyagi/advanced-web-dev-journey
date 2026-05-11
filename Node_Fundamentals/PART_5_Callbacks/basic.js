// callbacks/basic.js ------------

const doTask = (taskName, callback) => {
    console.log(`Starting: ${taskName}`);

    callback(`${taskName} is done`);
}

doTask("Compile code", (result) => {
    console.log("Result:" ,result);
})


// CALLBACKS (oldest)
//   └─ Error-first pattern, gets messy with nesting

// PROMISES (ES6)
//   └─ Cleaner chaining with .then().catch()
//   └─ Built on top of callbacks internally

// ASYNC/AWAIT (ES2017)
//   └─ Syntactic sugar over Promises
//   └─ Looks synchronous, works asynchronously
//   └─ What we use today