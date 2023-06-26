function solution(arr, divisor) {
    var answer = [];
    
    arr.forEach(ele => {
        ele % divisor === 0 ?
            answer.push(ele) : answer
    })
    answer.length === 0 ? answer = [-1] : answer
    return answer.sort((a,b)=>a-b);
}