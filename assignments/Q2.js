function getPerson(obj) {
    try {
       
        if (typeof obj.name === "string" && typeof obj.age === "number") {
            console.log(`Name: ${obj.name}, Age: ${obj.age}`);
        } else {
            throw new Error("Invalid parameter type");
        }
    } catch (error) {
        console.log(error.message); 
    }
}

// Valid input
// getPerson({ name: "Kaif", age: 23 }); 
// Output: Name: Kaif, Age: 23

// Invalid input
getPerson({ name: "Kaif", age: "23" }); 
// Output: Invalid parameter type
