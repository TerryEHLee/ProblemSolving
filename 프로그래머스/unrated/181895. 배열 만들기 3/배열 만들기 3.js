function solution(arr, intervals) {
    var answer = [];
    
    for (i = intervals[0][0]; i <= intervals[0][1]; i++) {
        answer.push(arr[i])
    }
    
    for (j = intervals[1][0]; j <= intervals[1][1]; j++) {
        answer.push(arr[j])
    }
    return answer;
}