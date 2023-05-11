function solution(my_strings, parts) {
    var answer = '';
    
    for (i = 0; i < parts.length; i++) {
        let num = my_strings[i]
        for (j = parts[i][0]; j <= parts[i][1]; j++) {
           answer += num[j]
        }
    }
    return answer;
}