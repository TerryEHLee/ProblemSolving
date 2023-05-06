function solution(a, d, included) {
    var answer = 0;
    let sequence = a
    
    for (i = 0; i < included.length; i++) {
        if (included[i]) {
            answer += sequence
        }
        sequence += d
    }
    return answer;
}