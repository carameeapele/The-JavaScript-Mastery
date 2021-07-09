const numbers = [1, -1, 2, 3];

// every()
// some()

const somePositive = numbers.some(function(value) {
    return value >= 0;
});

//console.log(somePositive);

const filtered = numbers.filter(n => n >= 0);

//console.log(filtered);