function solution(my_string, alp) {
    var answer = '';
    
    [...my_string].forEach(str => {
        str === alp ?
            answer += String(str.toUpperCase()):
        answer += String(str)
    })
    return answer;
}