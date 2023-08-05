function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        let currentSum = 0;
        let j = i;

        while (currentSum < n) {
            currentSum += j;

            if (currentSum === n) {
                answer++;
                break;
            }

            j++;
        }
    }

    return answer;
}
