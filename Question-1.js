// Create a function that will return the input string as an output with the cases switched
function changeCase(string) {
    return string
    .split("") //split the string to create a new array and ensure that there's no space in the split to show the element of the array is an individual character.
    .map(function (letters) //map will transform the array to function we created.
    {
        if(letters === letters.toLowerCase()) //if is used to check the elements in the array and return the argument desired.
        {
            return letters.toUpperCase();
        } else {return letters.toLowerCase()};
    })
    .join("");//join is used to merge the elements of the array to a single string
}
console.log(changeCase("The Quick Brown Fox"));//input string to undergo the function created
