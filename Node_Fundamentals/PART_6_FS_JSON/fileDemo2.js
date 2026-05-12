// Reading a File — readFileSync ------

import fs from 'fs';

const content = fs.readFileSync('message.txt', 'utf-8');

console.log('File content is:');
console.log(content);

// 'utf-8 = the encoding