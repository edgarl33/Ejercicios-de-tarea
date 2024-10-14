//Userprofile
const username = prompt("Enter your username:");
const age = prompt("Enter your age:");
let favoriteMovies = [];


let numberOfMovies = prompt("How many favorite movies would you like to enter?");
for (let i = 0; i < numberOfMovies; i++) {
    let movie = prompt(`Enter the title of favorite movie #${i + 1}:`);
    favoriteMovies.push(movie);
}

console.log(`User Info: \nUsername: ${username} \nAge: ${age}`);
console.log("\nFavorite Movies:");
favoriteMovies.forEach(movie => {
    console.log(`The film '${movie}' is one of my favorites.`);
});



// Highest number
let numbers = [];


for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt(`Enter number #${i + 1}:`));
    numbers.push(num);
}

let highest = numbers[0];


for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
        highest = numbers[i];  
    }
}

console.log(`The highest number is: ${highest}`);


// Palindrome
function isPalindrome(input) {
   
    let processedInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    let reversedInput = processedInput.split('').reverse().join('');

    return processedInput === reversedInput;
}


let userInput = prompt("Enter a word or sentence:");


if (isPalindrome(userInput)) {
    console.log(`"${userInput}" is a palindrome!`);
} else {
    console.log(`"${userInput}" is not a palindrome.`);
}


