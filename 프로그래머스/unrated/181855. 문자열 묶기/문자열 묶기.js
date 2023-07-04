function solution(strArr) {
    var answer = 0;
    let obj = {};
    let max = 0;
    
    strArr.forEach(ele => {
        let length = ele.length;
        obj[length] = obj[length] ? ++obj[length] : 1
    })    
    
    for (item in obj) {
        max = obj[item] > max ? obj[item] : max
    }
    
    answer = max;
    return answer;
}