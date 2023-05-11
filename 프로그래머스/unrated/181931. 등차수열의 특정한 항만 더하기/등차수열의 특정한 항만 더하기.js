function solution(a, d, included) {
    var answer = 0;
    let seq = []
    let num = 0
    for (i = 0; i < included.length; i++) {
        num = a + d*i
        seq.push(num)
    }
    
    for (j = 0; j < included.length; j++) {
        included[j] ? answer += seq[j] : answer 
    }
    
    return answer;
}