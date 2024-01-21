function solve(startNum, endNum) {
    let sum = 0;
    let numbersString = "";

    for (let i = startNum; i <= endNum; i++) {
        sum = sum + i;
        numbersString += `${i} `;
    }

    console.log(`${numbersString}\nSum: ${sum}`);
}
