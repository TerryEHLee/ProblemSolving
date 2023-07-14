function solution(sides) {
    var answer = [];
    sides.sort((a,b) => a-b)
    
    for (i = 1; i < sides[1]; i++) {
        i + sides[0] > sides[1] ? answer++ : answer
    }
    
    j = sides[1]; 
    while (sides[0] + sides[1] > j) {
        j++
        answer++
    }
    return answer;
}