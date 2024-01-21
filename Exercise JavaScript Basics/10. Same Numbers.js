function sameNumbersCheck(inputNumber) {
    const numberString = inputNumber.toString();
    const firstDigit = numberString[0];
    
    const allSameDigits = numberString.split('').every(digit => digit === firstDigit);

    const digitSum = numberString.split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    console.log(allSameDigits);
    console.log(digitSum);
}