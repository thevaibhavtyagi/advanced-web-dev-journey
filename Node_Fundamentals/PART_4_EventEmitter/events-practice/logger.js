import {EventEmitter} from 'events';

class Logger extends EventEmitter {

    constructor() {
        super();
        this.verbose = true;
    }

    setVerbose(bool) {
        this.verbose = bool;
    }

    log(level, message) {
        if (level === "info" && !this.verbose) {
            return;
    }

    const timestamp = new Date().toLocaleString();

    this.emit(`log:${level}`, {
            message,
            timestamp,
        });

    }
}

const logger = new Logger();

logger.on("log:info", ({ message, timestamp }) => {
    console.log(`[${timestamp}] [INFO] ${message}`);
});

logger.on("log:warn", ({ message, timestamp }) => {
    console.log(`[${timestamp}] [WARN] ${message}`);
});

logger.on("log:error", ({ message, timestamp }) => {
    console.log(`[${timestamp}] [ERROR] ${message}`);
});

// testing ---------------------

logger.log("info", "Server started on port 3000");

logger.log("warn", "Memory usage above 80%");

logger.log("error", "Database connection failed");

console.log("\nVerbose OFF\n");

logger.setVerbose(false);

logger.log("info", "This info log should NOT appear");

logger.log("warn", "CPU usage high");

logger.log("error", "Server crashed");