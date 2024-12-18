function convertToNumber(string) {
    try {
       
        if (typeof string === "string" && isNaN(Number(string))) {
            throw new Error("Invalid string"); 
        }
        return Number(string); 
    } catch (error) {
        return error.message; 
    }
}

console.log(convertToNumber("abc"));  // Output: Invalid string
console.log(convertToNumber("786")); // Output: 786
  
