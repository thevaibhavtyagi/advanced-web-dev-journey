// PRACTICE 3 -------------
import fs from 'fs';

fs.writeFile('async-notes.txt', 'Learning async file operations!', (err) => {
    if (err) {
        console.log("Error writing file");
        return;
    }

    console.log("File created!");

    fs.readFile('async-notes.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log(data);

        fs.unlink('async-notes.txt', (err) => {
            if (err) {
                console.log("Error deleting file");
                return;
            }

            console.log("File cleaned up!");
        });
    });
});