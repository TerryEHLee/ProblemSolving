function solution(number, limit, power) {
    var answer = 0;
    let ys = 0;
    
    for (let i = 1; i <= number; i++) {
        ys = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            i % j === 0 ? 
                (j * j === i ? 
                ys ++ : ys += 2)
            : ys;
        }
        ys > limit ?
            answer += power
        : answer += ys
    }
    
    return answer;
}