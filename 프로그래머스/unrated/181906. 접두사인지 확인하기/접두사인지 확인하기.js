function solution(my_string, is_prefix) {
    var answer = 0;
    let arr = ''
    
    for (i = 0; i < my_string.length; i++) {
        arr += my_string[i]
        if (arr === is_prefix) {
            answer = 1
        }
    }
    
    return answer;
}