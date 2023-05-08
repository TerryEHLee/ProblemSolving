function solution(str1, str2) {
    var answer = '';
    let first = str1.split('')
    let second = str2.split('')
    
    for (i = 0; i < str1.length; i++) {
        answer += first[i] + second[i]
    }
    return answer;
}