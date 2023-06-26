function solution(numbers) {
    var answer = 45;
    
    numbers.forEach(num => {
        answer -= num
    })
    return answer;
}