// WORKING OF STREAMS -------------

import fs from 'fs';

const readStream = fs.createReadStream('bigflie.txt', {
    encoding: 'utf-8',
    highWaterMark: 512
});

let chunkCount = 0;

readStream.on('data', (chunk) => {
    chunkCount++;

    console.log(`---- Chunk ${chunkCount} received ----`);
    console.log(`Size: ${chunk.length} characters`);
});

readStream.on('end', () => {
    console.log('\nDone');
});

readStream.on('error', (err) => {
  console.log('Stream error:', err);
});