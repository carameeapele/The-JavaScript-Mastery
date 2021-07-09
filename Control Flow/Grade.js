// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const marks = [80, 80, 50];

console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const avarage = calculateAverage(marks);

    if (avarage < 60) return 'F';
    if (avarage < 70) return 'D';
    if (avarage < 80) return 'C';
    if (avarage < 90) return 'B';
    return 'A';
}

function calculateAverage(array) {
    let sum = 0;

    for (let value of array)
        sum += value;

    return sum / array.length;
}