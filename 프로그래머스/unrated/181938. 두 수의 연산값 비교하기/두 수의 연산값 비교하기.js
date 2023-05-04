function solution(a, b) {
    var answer = 0;
    let calculation = parseInt(String(a) + String(b))
    let multiply = 2 * a * b
    if (calculation >= multiply) {
        answer = calculation
    } else {
        answer = multiply
    }
    return answer;
}