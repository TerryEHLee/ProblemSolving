function solution(num_list) {
    var answer = [];
    var arr = []
    
    arr = num_list.sort((a,b) => a - b)
    
    for (i = 0; i < 5; i++) {
        answer.push(arr[i])
    }
    
    return answer;
}