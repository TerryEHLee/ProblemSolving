function solution(x1, x2, x3, x4) {
    var answer = true;
    let x12 = true
    let x34 = true
    
    x12 = x1 === x2 ? x1 : true
    x34 = x3 === x4 ? x3 : true
    answer = x12 === x34 ? x12 : false 
    return answer;
}