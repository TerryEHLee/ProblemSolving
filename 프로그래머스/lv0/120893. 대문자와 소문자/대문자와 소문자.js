function solution(my_string) {
    var answer = '';
    let str = my_string.split('')
    for (i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            answer += str[i].toLowerCase()
        } else {
            answer += str[i].toUpperCase()
        }
    }
    return answer;
}