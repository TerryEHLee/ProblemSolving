function solution(arr) {
    var answer = [];
    
    arr.forEach(num => {
        num % 2 === 0 && num >= 50 ?
            answer.push(num/2) :
        num % 2 === 1 && num < 50 ?
            answer.push(num*2) : answer.push(num)
    })
    return answer;
}