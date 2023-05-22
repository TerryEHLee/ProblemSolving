function solution(num_list) {
    var answer = 0;
    var add = 0
    var odd = 0
    
    for (i = 0; i < num_list.length; i++) {
        i % 2 === 0 ? add+=num_list[i] : odd += num_list[i]
    }
     add > odd ? answer = add : answer = odd
    return answer;
}