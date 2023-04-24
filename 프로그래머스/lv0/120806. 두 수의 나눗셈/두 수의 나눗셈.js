function solution(num1, num2) {
    0 < num1, num2 && num1, num2 < 101;
    var answer = parseInt((num1 / num2) * 1000);
    return answer;
}