// FS BASICS -------------

import fs from 'fs';

const content = "Node.js is awesome!";

fs.writeFile('notes.txt', content, (err) => {
    if (err) {
        console.log("Error in writing to file!");
        return;
    }

    console.log("File has been written!");
 
    fs.readFile('notes.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error in reading file!");
            return;
        }

        console.log("File Content:");
        console.log(data);

        fs.appendFile('notes.txt', '\nI am learning File I/O!', (err) => {
            if (err) {
                console.log("Error in appending!");
                return;
            }

            console.log("Content appended!");

            fs.readFile('notes.txt', 'utf-8', (err, updatedData) => {
                if (err) {
                    console.log("Error in reading updated file!");
                    return;
                }

                console.log("Updated Content:");
                console.log(updatedData);

                fs.unlink('notes.txt', (err) => {
                    if (err) {
                        console.log("Error in deleting file!");
                        return;
                    }

                    console.log("File deleted successfully!");
                });
            });
        });
    });
});