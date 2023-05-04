function solution(a, b) {
    var answer = 0;
    let numbers = [String(a), String(b)]
    if (numbers[0] + numbers[1] >= numbers[1] + numbers[0]) {
        answer = numbers[0] + numbers[1]
        } else {
            answer = numbers[1] + numbers[0]
        }
    return parseInt(answer);
}