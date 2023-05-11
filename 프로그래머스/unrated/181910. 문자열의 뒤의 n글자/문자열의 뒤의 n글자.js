function solution(my_string, n) {
    var answer = [];
    
    for (i = my_string.length - 1; i >= my_string.length - n; i--) {
        answer.push(my_string[i])
    }
    return answer.reverse().join('');
}