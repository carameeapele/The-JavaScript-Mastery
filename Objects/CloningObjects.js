const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

const another = {...circle };

// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// const another = Object.assign({}, circle);

console.log(circle);
console.log(another);