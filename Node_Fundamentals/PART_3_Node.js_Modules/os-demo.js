// CORE MODULE - 'os' ------------
import os from 'os';

console.log("===== OS MODULE DEMO =====\n");

console.log("Platform:", os.platform()); // win32
console.log("CPI Arch:", os.arch()); //x64

// how man CPU core we have
const cpus = os.cpus();
console.log("CPU Cores:", cpus.length);
console.log("CPU Model:", cpus[0].model);


//ram info
const totalRam = os.totalmem();
const freeRam = os.freemem();

console.log("Total RAM:", (totalRam / 1024 / 1024 / 1024).toFixed(2), "GB");
console.log("Free RAM:", (freeRam / 1024 / 1024 / 1024).toFixed(2), "GB");