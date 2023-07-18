function solution(array) {
    var answer = 0;
    let obj = {};
    let max = 0;
    let cnt = 0;
    
    array.forEach(ele => {
        obj[ele] ? obj[ele]++ : obj[ele] = 1
    
     if (obj[ele] > cnt) {
         cnt = obj[ele];
         max = ele;
     } else if (obj[ele] === cnt) {
         max = -1
     }})
    
    return max;
}