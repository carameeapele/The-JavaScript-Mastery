const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second];
console.log(combined); // [1, 2, 3, 'a', 4, 5, 6]

// const copy = combined.slice();
const copy = [...combined];
console.log(copy); // same