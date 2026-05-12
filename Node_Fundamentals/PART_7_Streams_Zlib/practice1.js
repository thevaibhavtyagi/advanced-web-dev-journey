import fs from 'fs';
import zlib from 'zlib';

fs.writeFileSync('diary.txt', `This is the first line of my diary.\nToday was a great day with lots of activities.\nI learned about Node.js streams and how they work efficiently.\nStreams are powerful tools for handling large amounts of data.\nI'm excited to continue exploring more features of Node.js!`)

const readStream = fs.createReadStream('diary.txt', {
    encoding: 'utf-8',
    highWaterMark: 256
});

let chunkCount = 0;

readStream.on('data', (chunk) => {
    chunkCount++;

    console.log(`---- Chunk ${chunkCount} received ----`);
    console.log(`Size: ${chunk.length} characters`);
});

readStream.on('end', () => {
    console.log(`Total chunks received: ${chunkCount}`);
    
    const readStreamBackup = fs.createReadStream('diary.txt');
    const writeStreamBackup = fs.createWriteStream('diary-backup.txt');
    readStreamBackup.pipe(writeStreamBackup);
})


