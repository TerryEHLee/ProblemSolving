function solution(n) {
    var answer = 0;
    
    for (i = 1; i < n + 1; i++) {
        let num = 0;
        for (j = 1; j <= i; j++) {
            if (i % j == 0) {
                num++
            }
        }
                if (num > 2) {
                    answer++
        }
    }
    return answer;
}