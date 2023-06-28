function solution(a, b) {
    var answer = 0;
    
    a.forEach((a,i) => {
        b.forEach((b,j) => {
            i === j ? 
                answer += a * b :
            answer
        })
    })
    
    return answer;
}