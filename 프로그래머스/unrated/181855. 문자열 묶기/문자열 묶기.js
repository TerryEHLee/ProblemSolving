function solution(strArr) {
    var answer = 0;
    let obj = {};
    
    strArr.forEach(ele => {
        const leng = ele.length;
       obj[leng] = obj[leng] ? ++obj[leng] : 1
    })
    
    let max = 0;
    for (leng in obj) {
        max = obj[leng] > max ? obj[leng] : max
    }
    
    answer = max
    return answer;
}