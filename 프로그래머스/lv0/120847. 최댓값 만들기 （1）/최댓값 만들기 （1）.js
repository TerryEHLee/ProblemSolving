function solution(numbers) {
    
    let max = Math.max(...numbers);
    numbers.splice(numbers.indexOf(max), 1)
    let second = Math.max(...numbers)
    return max * second;
}