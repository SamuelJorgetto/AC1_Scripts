let num1 = 5;
let num2 = 10;

console.log("Addition: ", num1 + num2);
console.log("Subtraction: ", num1 - num2);
console.log("Multiplication: ", num1 * num2);
console.log("Division: ", num1 / num2);

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let str = "Disciplina de Programação para web";
console.log("Number of characters: ", str.length);

let name = "Edson Martin Feitosa";
let parts = name.split(" ");
let firstName = parts[0];
let lastName = parts[parts.length - 1];
console.log(`${firstName}.${lastName}@facens.br`);

for (let i = 1; i <= 10; i++) {
  if (i < 10) {
    process.stdout.write(`${i} - `);
  } else {
    process.stdout.write(i.toString());
  }
}

function printDouble(num) {
  if (num <= 0) {
    console.log("Só é aceito números positivos maiores que zero");
  } else {
    console.log("Double: ", num * 2);
  }
}

printDouble(5);
printDouble(-1);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world"));

function validateEmail(email) {
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

console.log(validateEmail("test@example.com"));
console.log(validateEmail("test@example"));

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
