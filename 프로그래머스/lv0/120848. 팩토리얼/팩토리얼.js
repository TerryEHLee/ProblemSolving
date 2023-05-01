function solution(n) {
    var answer = 0;
    let factorial = 1
    for (i = 1; ; i++) {
        factorial *= i
        if (factorial > n) {
            answer = i - 1
            break
        }
    }
    return answer;
}