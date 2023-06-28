function solution(myString) {
    var answer = [];
    let arr = myString.split('x')
    
    arr.forEach(a => {
        answer.push(a.length)
    })
    
    return answer;
}