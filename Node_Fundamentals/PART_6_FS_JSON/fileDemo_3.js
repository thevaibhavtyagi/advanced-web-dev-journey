// Appending to a File — appendFileSync -----------

import fs from 'fs';

fs.appendFileSync('message.txt', '\nThis line was added later!');

console.log('Content appended!');