function solution(money) {
    var answer = [];
    iceA = parseInt(money / 5500);
    rest = money - 5500*iceA;
    answer = [iceA, rest];
    return answer;
}