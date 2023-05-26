function solution(my_string, alp) {
    var answer = my_string.split('');
    
    for (i = 0; i < my_string.length; i++) {
        if (my_string[i] === alp) {
            answer[i] = alp.toUpperCase()
        } 
    }
    return answer.join('');
}