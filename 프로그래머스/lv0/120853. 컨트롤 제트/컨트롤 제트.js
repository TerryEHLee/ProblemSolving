function solution(s) {
    var answer = 0;
    let num = s.split(' ')
    for (i = 0; i < num.length; i++) {
        if (num[i] === 'Z') {
         answer -= parseInt(num[i -1])
        } else {
            answer += parseInt(num[i])
        }
    }
    return answer;
}