function solve (input) {
    'use strict';

    const typeOfParm = typeof input;

    if (typeOfParm == 'number') {
        const area = input ** 2 * Math.PI;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we received a ${typeOfParm}.`);
    }
}