// PRACTICE 2 --------------------

import fs, { write } from 'fs';
import zlib from 'zlib';

const readStream = fs.createReadStream('diary.txt');

const writeStream = fs.createWriteStream('diary.txt.gz');

const gzip = zlib.createGzip();

readStream.pipe(gzip).pipe(writeStream);

writeStream.on('finish', () => {
    console.log("Compressed successfully!");

    const readStream = fs.createReadStream('diary.txt.gz');

    const writeStream = fs.createWriteStream('diary-restored.txt');

    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
    console.log("DECompressed successfully!");

});

});