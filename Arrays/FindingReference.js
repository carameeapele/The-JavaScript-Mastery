const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

let course = courses.find(function(course) {
    return course.name === 'a';
});

console.log(course); // first element that matches

course = courses.findIndex(function(course) {
    return course.name === 'a';
});

console.log(course); // 0

course = courses.find(function(course) {
    return course.name === 'x';
});

console.log(course); // undefined

course = courses.findIndex(function(course) {
    return course.name === 'x';
});

console.log(course); // -1