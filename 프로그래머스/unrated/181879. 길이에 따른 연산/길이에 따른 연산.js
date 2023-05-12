function solution(num_list) {
    var answer = 1;
    
    for (i = 0; i < num_list.length; i++) {
        num_list.length > 10 ? answer += num_list[i] : answer *= num_list[i]
    }
        return num_list.length > 10 ? answer - 1 : answer;
}