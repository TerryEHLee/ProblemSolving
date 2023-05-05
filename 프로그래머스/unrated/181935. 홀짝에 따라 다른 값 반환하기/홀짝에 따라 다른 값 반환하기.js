function solution(n) {
    var answer = 0;
    let even = []
    let odd = []
    
    for (i = 1; i <= parseInt((n+1) / 2); i ++) {
        if (n % 2 === 0) {
            answer += 4 * i * i
        } else {
            answer += 2 * i - 1
        }
    }
    return answer;
}