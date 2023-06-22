function solution(x, n) {
    var answer = [];
    
    let i = 1
    while(answer.length !== n) {
            answer.push(i*x)
        i++
        }
    
    return answer;
}