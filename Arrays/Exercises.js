// 1. Array from Range

function arrayFromRange(min, max) {
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

const numbers = arrayFromRange(1, 4);
//console.log(numbers);

// 2. Includes

function includes(array, searchElement) {
    for (let n of array)
        if (n === searchElement)
            return true;
    return false;
}

//console.log(includes(numbers, 2));

// 3. Except

const output = except(numbers, [1, 2]);

function except(array, excluded) {
    const output = [];
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element);
    return output;
}

// console.log(output);

// 4. Moving an Element

function move(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offser');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
}

const output1 = move(numbers, 0, 1);
//console.log(output1);

// 5. Count Occurrences

function countOccurrences(array, searchElement) {
    // let c = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         c++;
    // return c;

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    }, 0);
}

const count = countOccurrences(numbers, 3);
//console.log(count);

// 6. Get Max

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array[i];
    // return max;

    return array.reduce((a, b) => (a > b) ? a : b);
    // if (current > accumulator) return current;
    // return accumulator;
}


const max = getMax(numbers);
// console.log(max);

// 7. Movies

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pich their title

let titles = movies
    .filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title);

console.log(titles);