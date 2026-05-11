//  .once() in Action --------------

import {EventEmitter} from 'events';

const emitter = new EventEmitter();

emitter.once("server:ready", () => {
    console.log(`Server is ready`);
});

emitter.on("server:request", (url) => {
    console.log(`Logged for: ${url}`);
});

//testing
emitter.emit("server:ready");
emitter.emit("server:ready"); // not gonna work

emitter.emit("server:request", "/home");
emitter.emit("server:request", "/about");
emitter.emit("server:request", "/api/users");