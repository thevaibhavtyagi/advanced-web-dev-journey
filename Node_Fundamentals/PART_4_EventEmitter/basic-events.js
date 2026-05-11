// BASIC UNDERSTANDING OF EE --------------

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
    console.log(`Hello, ${name}`);
});

emitter.on("greet", (name) => {
    console.log(`Welcome aboard, ${name}! Glad you're here.`);
});

console.log("Firing 'greet' event...\n");
emitter.emit("greet", "Rahul");