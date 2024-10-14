// Secret society
let names = ["Juan", "Fiolmena", "Jesus", "Victor"];

let namesSecretSociety = names.map(function(string) {
  return string.charAt(0);
});

console.log(namesSecretSociety); 


// Array of multiples
function multiplesOfNumber(number, length) {
    let result = [];
    
    for (let i = 1; i <= length; i++) {
      result.push(number * i);
    }
  
    return result;
  }
  

  console.log(multiplesOfNumber(5, 4)); // Output: [5, 10, 15, 20]
  console.log(multiplesOfNumber(3, 6));


// Summatory of resistors
let numeros = [1, 2, 3, 4, 5, -10];

function sumresistors(numeros) {
    return numeros.reduce((total, numero) => total + numero, 0);
  }

console.log(sumresistors(numeros))

