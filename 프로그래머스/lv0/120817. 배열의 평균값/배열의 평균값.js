function solution(numbers) {
    var answer = 0
    let sum = 0;
    
   numbers.forEach((v) => {
       sum += v
   })
    
    answer = sum/numbers.length
    
    return answer;
}