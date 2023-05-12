function solution(numbers, n) {
    var answer = 0;
    let num = 0
    
    for (i = 0; i < numbers.length; i++) {
        num > n ? num : num += numbers[i]
    }
    return num;
}