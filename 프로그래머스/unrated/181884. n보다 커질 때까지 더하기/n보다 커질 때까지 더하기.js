function solution(numbers, n) {
    var answer = 0;
    let sum = 0;
    
    for (i = 0; i < numbers.length; i++) {
        answer = sum > n ? sum : sum += numbers[i]
    }   
    
    return answer;
}