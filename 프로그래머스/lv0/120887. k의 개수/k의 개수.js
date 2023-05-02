function solution(i, j, k) {
    var answer = 0;
    for (var num = i; num <= j; num++) {
        var numString = num.toString();
        for (var digitIndex = 0; digitIndex < numString.length; digitIndex++) {
            if (numString[digitIndex] === k.toString()) {
                answer++;
            }
        }
    }
    return answer;
}
