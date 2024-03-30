let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function primeNumbers(numbers) {
    if(numbers <= 1) {
        return undefined;
    }
    for(i = 2; i <= Math.sqrt(numbers); i++) {
        if(numbers % i === 0) {
            return undefined;
        } 
    }
    return numbers;
}
console.log(arrayOfNumbers.filter(primeNumbers));