// JSON + FS ---------------------
import fs from 'fs';

fs.readFile('products.json', 'utf-8', (err, data) => {
    if(err) {
        console.log("Error in reading a file!");
        return;
    }

    const parsedData = JSON.parse(data);
    console.log(parsedData);

    const newProduct = {id: 4, name: "buds", price: 49.00};
    parsedData.push(newProduct);

    fs.writeFile('products.json', JSON.stringify(parsedData, null, 2), (err) => {
        if(err) {
            console.log("Some error");
            return;
        }

        console.log("Done");
    });
});

