// Find the Largest Number in an Array 

function findlergestNumber(arr) {
    if (arr.length ===0) return true;

    // Math max method
    
    return Math.max (...arr);
}
// User input 

const number =[10,5,20,8]
console.log("largest number",
    findlergestNumber(number)
)