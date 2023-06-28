function solution(s) {
    var answer = '';
    var length = s.length
    
    length % 2 === 1 ?
        answer = s[parseInt(length/2)] : 
    answer += s[length/2-1] + s[length/2]
    return answer;
}