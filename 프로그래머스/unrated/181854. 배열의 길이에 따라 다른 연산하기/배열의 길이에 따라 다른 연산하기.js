function solution(arr, n) {
    var answer = [];
    
    arr.length % 2 === 1 ?
        arr.forEach((ele,i) => {
            i % 2 === 0 ?
                answer.push(ele + n) : answer.push(ele);
        }) :
        arr.forEach((ele,i)=> {
        i % 2 === 1 ? answer.push(ele + n) : answer.push(ele)
    });
    
    return answer;
}
