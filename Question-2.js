function numbers(num1,num2) {
    let arrayOfnumbers = [];
        if(num1 <= num2){
        for(i = num1;i <= num2; i++)
        arrayOfnumbers.push(i);
        } else {
            for(i = num1;i >= num2; i--)
        arrayOfnumbers.push(i);
        }
    return arrayOfnumbers;
}


console.log(numbers(7, 4)); 
console.log(numbers(-4, 7));