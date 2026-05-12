//  Async versions — the right way --------------

import fs from 'fs';

fs.writeFile('file.txt', 'Hi, its me', (err) => {
    if(err) {
        console.log('Something went wrong:', err);
        return;
    }
    console.log('Async write done');

    fs.readFile('file.txt', 'utf-8', (err, data) => {
        if(err) {
            console.log('Read error:', err);
            return;
        }

        console.log(`File content is: ${data}`);
    });
});