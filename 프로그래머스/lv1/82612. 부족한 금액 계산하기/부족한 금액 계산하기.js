function solution(price, money, count) {
    var answer = 0;
    var sum = 0;
    
    for (i = 1; i <= count; i++) {
        sum += i;
    }
    
    answer = sum * price - money
    return answer > 0 ? answer : 0;
}