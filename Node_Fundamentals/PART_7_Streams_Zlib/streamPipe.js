import fs from 'fs';

const readStream = fs.createReadStream('bigflie.txt');
const writeStream = fs.createWriteStream('bigfile-copy.txt');

// pipe connects them — output of read goes directly into write
readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copied successfully using streams!');
});

readStream.on('error', (err) => console.log('Read error:', err));
writeStream.on('error', (err) => console.log('Write error:', err));