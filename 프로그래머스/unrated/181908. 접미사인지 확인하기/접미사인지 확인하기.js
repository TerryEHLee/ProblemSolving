function solution(my_string, is_suffix) {
    var answer = 0;
    let arr = []
    
    for (i = 0; i < my_string.length; i++) {
        if (my_string.slice(i) === is_suffix) {
            answer = 1
            break
        } 
    }
    return answer;
}