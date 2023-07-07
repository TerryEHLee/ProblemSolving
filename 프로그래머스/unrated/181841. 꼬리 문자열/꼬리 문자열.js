function solution(str_list, ex) {
    var answer = '';
    
    str_list.forEach(str => {
        str.includes(ex) ?
            answer : answer += str;
    })
    
    return answer;
}