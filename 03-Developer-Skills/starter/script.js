// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// FIX
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitide = function (temps) {
//     let max = temps[0];
//     let min = temps[0];

//     for (let i = 0; i < temps.lenght; i++) {
//         // console.log(temps[0]);
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// }

// // calcTempAmplitide([4, 78, 98, 3, 6, 9, 199, 113])
// const amplitude = calcTempAmplitide(temperatures)
// console.log(amplitude);

const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
calcTempAmplitude(temperatures);
// console.log(amplitude);

// let numbers = [4, 78, 98, 3, 6, 9, 199, 113]
// let max = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     const curTemp = numbers[i];
//     console.log(numbers[i])
//     if (curTemp > max) {
//         max = curTemp;
//         console.log(max, "Check Vaule")
//     }

// }