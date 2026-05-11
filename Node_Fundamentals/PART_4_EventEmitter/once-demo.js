// once-demo.js - Listen Only One Time ---------

import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.once("app:startup", () => {
    console.log("App started.");
});

emitter.once("app:request", (url) => {
    console.log(`Request recieved: ${url}`);
});

emitter.emit("app:startup");
emitter.emit("app:request", "/home");
