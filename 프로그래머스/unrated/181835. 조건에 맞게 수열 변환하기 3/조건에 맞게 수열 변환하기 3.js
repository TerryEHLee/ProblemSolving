function solution(arr, k) {
    var answer = [];
    
    for (i = 0; i < arr.length; i++) {
        k % 2 === 1 ? answer.push(arr[i] * k) :
        answer.push(arr[i] + k)
    }
    return answer;
}