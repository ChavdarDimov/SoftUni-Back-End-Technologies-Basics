function sumDigits(number) {
    const numberString = number.toString();

    let digitSum = 0;

    for (let i = 0; i < numberString.length; i++) {
        digitSum += parseInt(numberString[i]);
    }

    return digitSum;
}