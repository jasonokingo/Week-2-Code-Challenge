// Create an array and input the numbers
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Create a function that will carry out the finding of prime numbers
function primeNumbers(numbers) {
// We use if to ensure that the output returned should not include any value less than or equals to one
    if(numbers <= 1) {
        return undefined;
    }
// This condition states that the (number) once square rooted should begin to divide the (number) itself from i which is 2 and the numbers in between upto the square-rooted value found 
    for(i = 2; i <= Math.sqrt(numbers); i++) {
// We use if to ensure that the output returned should not include any value that is not a prime number.
        if(numbers % i === 0) {
            return undefined;
        } 
    }
    return numbers; //return the numbers with the function in place
}
//then we filter the array to return the prime numbers 
console.log(arrayOfNumbers.filter(primeNumbers));