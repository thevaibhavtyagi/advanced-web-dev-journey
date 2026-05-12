// BASIC WORKIGN EXAMPLE -----------------

import fs, { write } from 'fs';
import zlib from 'zlib';

const readStream = fs.ReadStream('bigflie.txt');

const writeStream = fs.createWriteStream('bigfile.txt.gz');

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File compressed successfully! Check bigfile.txt.gz');
});

readStream.on('error', (err) => console.log('Read error:', err));
writeStream.on('error', (err) => console.log('Write error:', err));