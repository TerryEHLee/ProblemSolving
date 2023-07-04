function solution(left, right) {
    var answer = 0;
    
    for (i = left; i <= right; i++) {
        var cnt = 0;
        for (j = 1; j <= i; j++) {
            i % j === 0 ? cnt++ : cnt
        }
        cnt % 2 === 0 ? answer += i : answer -= i
    }
    return answer;
}