function solution(n) {
    var answer = 0;
    
    for (i = 0; i <= n/2; i++) {
        if (n % 2 === 0) {
            answer += 4 * i * i
        } else {
            answer += 2 * i + 1
        }
    }
    return answer;
}