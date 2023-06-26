function solution(x) {
    var answer = true;
    var sum = 0;
    
    x = String(x);
    [...x].forEach(x => {
        sum += +x
    })
    return answer = x % sum === 0 ? true:false;
}