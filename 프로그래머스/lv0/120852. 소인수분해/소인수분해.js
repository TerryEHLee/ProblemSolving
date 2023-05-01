function solution(n) {
    var answer = [];
    for (i = 2; i <= n; i++) {
        if (n % i === 0) {
            answer.push(i)
                 }   
                }
    for (j = 0; j < answer.length + 3; j++) {
                for (k = j + 1; k < answer.length + 2; k++) {
                 if(answer[k] % answer[j] === 0) {
                     answer.splice(k, 1)
                     k--
            
            }
        }
    }
    return answer;
}