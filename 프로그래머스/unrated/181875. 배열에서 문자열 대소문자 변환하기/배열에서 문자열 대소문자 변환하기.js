function solution(strArr) {
    var answer = [];
    
    strArr.forEach((ele, id) => {
       ele = id % 2 === 0 ? ele.toLowerCase() : ele.toUpperCase()
        answer.push(ele)
    })
    return answer;
}