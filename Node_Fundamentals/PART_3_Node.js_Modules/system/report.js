// system/report.js

import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.join(__dirname, "..");

// RAM details
const totalRAM = os.totalmem();
const freeRAM = os.freemem();

const freeRAMPercent = ((freeRAM / totalRAM) * 100).toFixed(2);


console.log("===== SYSTEM REPORT =====");

console.log("\nFile Path:");
console.log(__filename);

console.log("\nProject Root:");
console.log(projectRoot);

console.log("\nRAM Info:");
console.log(`Free RAM: ${freeRAMPercent}%`);

if (freeRAMPercent < 20) {
  console.log("⚠ Low memory warning!");
}