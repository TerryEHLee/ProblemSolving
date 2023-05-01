function solution(sides) {
    var answer = 0;
    max = Math.max(...sides)
    sides.splice(sides.indexOf(max), 1)
    if(sides[0] + sides[1] > max) {
        answer = 1
    } else {
        answer = 2
    }
    return answer;
}