function solution(n) {
    var answer = 0;
    let three = n.toString(3)
    let reversed = [...three].reverse().join('')
    
    answer = parseInt(reversed,3)
    return answer;
}