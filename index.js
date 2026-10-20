for (let i = 1; i <= 5; i++) {
    if (i !== 3) {
        console.log(i)
    }
}



function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i];

    }
    return sum;
}