function solution(arr, k) {
    var answer = [];
    
    for (num of arr) {
        k % 2 === 1 ? answer.push(num * k) :
        answer.push(num + k)
    }
    return answer;
}