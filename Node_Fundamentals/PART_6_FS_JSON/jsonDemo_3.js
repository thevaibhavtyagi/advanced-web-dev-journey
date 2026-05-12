// READING AND WRITING JSON FILES WITH fs -----------------

import fs from 'fs';

const students = [
    {
        id: 1,
        name: 'Ravi',
        grade: 'A'
    },
    {
        id: 2,
        name: 'Maya',
        grade: 'B'
    },
    {
        id: 3,
        name: 'Liam',
        grade: 'A'
    },
    {
        id: 4,
        name: 'Noah',
        grade: 'C'
    },
    {
        id: 5,
        name: 'Aisha',
        grade: 'B'
    }
];

fs.writeFile('students.json', JSON.stringify(students, null, 2), (err) => {
    if(err) {
        console.log("Error in writing to a file!");
        return;
    }

    console.log("File has been written!");
})

fs.readFile('students.json', 'utf-8', (err, data) => {
    if(err) {
        console.log('Error in reading a file!');
        return;
    }

    const parsedData = JSON.parse(data);
    console.log(parsedData);

    console.log(`Total length of students: ${parsedData.length}`);
})