function solution(my_string, overwrite_string, s) {
    var answer = my_string.split('');
    for (i = s; i < s + overwrite_string.length; i++) {
        answer[i] = overwrite_string[i - s]
    }
    return answer.join('');
}