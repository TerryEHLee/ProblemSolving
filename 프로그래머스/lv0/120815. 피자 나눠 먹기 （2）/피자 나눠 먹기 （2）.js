function solution(n) {
    let answer = 0;
    if (n % 6 === 0) {
        answer = n / 6;
    } else {
        for (i = 1; ;i++) {
            if (6 * i % n === 0) {
                answer = i;
                break;
            } 
        }
    }
    return answer;
}