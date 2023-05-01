function solution(my_string) {
    var answer = 0;
    str = my_string.split('')
    for (i = 0; i < str.length; i++) {
        if (!isNaN(parseInt(str[i]))) {
            answer += parseInt(str[i])
        }
    }
    return answer;
}