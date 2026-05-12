// BAISC EXAMPLE OF JSON -------------------
// USE OF JSON.stringify()--------------

const student = {
    name: "Vaibhav",
    age: 21,
    city: "Deoband"
};

const jsonString = JSON.stringify(student, null, 2);

console.log(jsonString);

console.log(typeof jsonString);