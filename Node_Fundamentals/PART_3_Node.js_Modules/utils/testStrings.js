// importing from stringUtils.js file --------------

import path from 'path';
import { fileURLToPath } from 'url';


import {
    capitalize,
    reverseString,
    isPalindrome,
    countWords,
    truncate
} from "./stringUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Current File:", __filename);
console.log("Current Directory:", __dirname);

console.log("\n--- capitalize() ---");
console.log(capitalize("hello"));
console.log(capitalize("world"));

console.log("\n--- reverseString() ---");
console.log(reverseString("hello"));
console.log(reverseString("nodejs"));

console.log("\n--- isPalindrome() ---");
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

console.log("\n--- countWords() ---");
console.log(countWords("I love JavaScript"));
console.log(countWords("Node.js modules are powerful"));

console.log("\n--- truncate() ---");
console.log(truncate("JavaScript is amazing", 10));
console.log(truncate("Hello", 10));