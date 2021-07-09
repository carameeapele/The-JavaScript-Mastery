const numbers = [1, 2, 3, 4, 5, 6, 7];

// End
const last = numbers.pop();
console.log(numbers); // [ 1, 2, 3, 4, 5, 6 ]
console.log(last); // 7

// Beginning
const first = numbers.shift();
console.log(numbers); // [ 2, 3, 4, 5, 6 ]
console.log(first); // 1

// Middle
numbers.splice(2, 2);
console.log(numbers); // [ 2, 3, 6 ]