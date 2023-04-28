//comparison operators
let num1 = 10;
let num2 = 5;
let myStr = '5';

console.log(`is ${num1} less than ${num2}: ${num1 < num2}`); //false
console.log(`is ${num1} greater than ${num2}: ${num1 > num2}`); //true
console.log(`is ${num1} less than or equal to ${num2}: ${num1 <= num2}`); //false
console.log(`is ${num1} greater than or equal to ${num2}: ${num1 >=  num2}`); //true
console.log(`is ${num2} not equal to '${myStr}': ${num2 != myStr}`); //false
console.log(`is ${num2} equal to '${myStr}': ${num2 == myStr}`); //true 
console.log(`is ${num2} not strictly equal to '${myStr}': ${num2 !== myStr}`); //true
console.log(`is ${num2} strictly equal to '${myStr}': ${num2 === myStr}`); //false
console.log(`typeof ${num2}: ${typeof num2}`);
console.log(`typeof '${myStr}': ${typeof myStr}`);
