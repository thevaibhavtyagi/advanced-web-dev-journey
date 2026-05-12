import fs from 'fs';

// Create a Writable Stream
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, this is chunk 1!\n');
writeStream.write('This is chunk 2 being written!\n');
writeStream.write('And this is the final chunk!\n');


writeStream.end();


writeStream.on('finish', () => {
  console.log('All chunks written! File is ready.');
});

writeStream.on('error', (err) => {
  console.log('Write stream error:', err);
});