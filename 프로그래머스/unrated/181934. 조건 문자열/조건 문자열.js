function solution(ineq, eq, n, m) {
    var answer = 0;
    if (eq === '=') {
        if (ineq === '<') {
            answer = +(n <= m)
        } else {
            answer = +(n >= m)
        }
    } if (eq === '!') {
        if (ineq === '<') {
            answer = +(n < m)
        } else {
            answer = +(n > m)
        }
    }
    return answer;
}