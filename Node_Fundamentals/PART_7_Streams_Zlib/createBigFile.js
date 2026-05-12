// CREATING BIG FILE TO WORK WITH STREAMS IN IT ------------

import fs from 'fs';

let content = '';
for (let i = 1; i <= 1000; i++) {
    content += `This is line number ${i} of our test file.\n`;
}

fs.writeFileSync('bigflie.txt', content);
console.log("it is created");