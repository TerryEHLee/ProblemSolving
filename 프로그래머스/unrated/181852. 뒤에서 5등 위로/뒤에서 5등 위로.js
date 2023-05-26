function solution(num_list) {
    var answer = [];
    var arr = num_list.sort((a, b) => a - b)
    
    for (i = 5; i < num_list.length; i++) {
        answer.push(arr[i])
    }
    return answer;
}