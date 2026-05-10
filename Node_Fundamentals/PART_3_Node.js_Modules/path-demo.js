// CORE MODULE - 'path' ------------
import path from 'path';

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log("=== PATH MODULE DEMO ===\n");
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);