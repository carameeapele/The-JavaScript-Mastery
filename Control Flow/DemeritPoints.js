// Speed Limit = 70
// 5 -> 1
// 12 points -> License Suspended

checkSpeed(130);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }

    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12)
        console.log('License Suspended');
    else
        console.log('Points: ', points);

}