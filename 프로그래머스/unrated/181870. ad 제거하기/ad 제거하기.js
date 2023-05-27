function solution(strArr) {
    var answer = [];
    
    strArr.forEach(ele => {
        !ele.includes('ad') && answer.push(ele)
    })
    return answer;
}