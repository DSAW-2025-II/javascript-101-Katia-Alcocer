// Sum of Two Numbers
function sum(a, b) {
  return a + b;
  // Add your code here
}

// Factorial of a Number
function factorial(n) {
  let nfactorial = 1;

  for (let i =1; i <= n; i++) {
    nfactorial=nfactorial*i;
  }

  return nfactorial;
  // Add your code here
}

// Find the Largest Number
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;

  // Add your code here
}

// Count Vowels in a String
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {

  if (n <= 1) return false;  
  
  if (n === 2 || n === 3) return true;
  if (n % 2 === 0) return false;  
  if (n % 3 === 0) return false;  

 //square root
  for (let i = 5; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
