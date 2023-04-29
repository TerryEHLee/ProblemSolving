function solution(numbers, k) {
    var answer = 0;
    for (i = 0; i <= 1000000; i++) {
        numbers.push(numbers[i])
    }
        answer = numbers[2 * k - 2]   
    return answer;
}