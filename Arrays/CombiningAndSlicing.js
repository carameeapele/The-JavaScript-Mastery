const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second)
console.log(combined); // [ 1, 2, 3, 4, 5, 6 ]

const slice = combined.slice(2, 4);
console.log(slice); // [ 3, 4 ]

// -------------------------------------------------------

const objectArray1 = [{ id: 1 }];
objectArray1[0].id = 10;