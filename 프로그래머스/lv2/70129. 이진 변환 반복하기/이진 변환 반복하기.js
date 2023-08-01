function solution(s) {
    let countIterations = 0;
    let countZeros = 0;

    while (s !== "1") {
        countIterations++;
        countZeros += (s.match(/0/g) || []).length; // Handle the case when there are no 0s
        s = s.replace(/0/g, '').length.toString(2);
    }

    return [countIterations, countZeros];
}

