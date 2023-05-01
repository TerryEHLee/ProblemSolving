function solution(n) {
    var answer = 0;
    let str = String(n)
    str = str.split('')
    for (i = 0; i < str.length; i++) {
        answer += parseInt(str[i])
    }
    return answer;
}