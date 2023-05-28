function solution(myString) {
    var answer = [];
    var num = myString.split('x')
    
    num.forEach(ele => {
        answer.push(ele.length)
    })
    return answer;
}