// USE OF JSON.parse() ---------------

const jsonString = '{"name": "Vaibhav", "age": 21, "city": "Deoband"}';

const studentObj = JSON.parse(jsonString);

console.log(studentObj.name);
console.log(studentObj.city);