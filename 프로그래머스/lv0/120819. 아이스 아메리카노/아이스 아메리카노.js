function solution(money) {
    
    coffee = ~~(money/5500)
    rest = money - coffee*5500
    var answer = [coffee, rest];
    return answer;
}