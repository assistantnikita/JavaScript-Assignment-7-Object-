function hasProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return "true";
        }
    }
    return "false";
}

const myObject = {}; // Create an empty object

// Sample input
const input = 1;

// Set properties in the object based on the input
if (input === 1) {
    myObject.someProperty = "Some Value";
}

// Call the function to check if there are properties and print the result
const result = hasProperties(myObject);
console.log(result);
