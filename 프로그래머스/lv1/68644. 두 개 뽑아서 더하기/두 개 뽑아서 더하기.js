function solution(numbers) {
    var answer = [];
    
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            answer.includes(numbers[i] + numbers[j]) ? 
                answer : answer.push(numbers[i] + numbers[j])
        }
    }
    return answer.sort((a,b) => a - b);
}