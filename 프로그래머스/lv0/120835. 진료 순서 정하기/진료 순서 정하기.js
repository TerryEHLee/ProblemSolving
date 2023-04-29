function solution(emergency) {
    var answer = [];
    for (i = 0; i < emergency.length; i++) {
        var count = 0;
        for (j = 0; j < emergency.length; j++) {
            if (emergency[i] < emergency[j]) {
                count++;
            }  
        }
        answer.push(count + 1);
    }
    return answer;
}
