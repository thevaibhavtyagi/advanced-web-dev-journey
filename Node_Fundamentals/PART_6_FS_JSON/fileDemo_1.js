// Writing a File — writeFileSync ------

import fs from 'fs';

fs.writeFileSync('message.txt', 'Hello! This is my first file created by Node.js.');

console.log('File has been written!');