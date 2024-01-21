function roadRadar(speed, area) {

    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20
    };

    speed = Number(speed);

    const speedDifference = speed - speedLimits[area];

    let status;
    if (speedDifference > 0 && speedDifference <= 20) {
        status = 'speeding';
    } else if (speedDifference > 20 && speedDifference <= 40) {
        status = 'excessive speeding';
    } else if (speedDifference > 40) {
        status = 'reckless driving';
    }

    if (speedDifference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimits[area]} zone`);
    } else {
        console.log(`The speed is ${speedDifference} km/h faster than the allowed speed of ${speedLimits[area]} - ${status}`);
    }
}