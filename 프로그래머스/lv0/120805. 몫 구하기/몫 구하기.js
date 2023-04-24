function solution(num1, num2) {
    0 < num1, num2 < 101
    
    var devidingValue = num1 / num2;
    var rest = num1 % num2;
    var answer = (num1-rest) / num2;
    return answer;
}