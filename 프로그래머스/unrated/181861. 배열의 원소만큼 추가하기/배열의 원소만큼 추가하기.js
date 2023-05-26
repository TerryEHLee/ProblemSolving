function solution(arr) {
    var answer = [];
    
    arr.forEach(ele => {
        for (i = 0; i < ele; i++) {
            answer.push(ele)
        }
    })
    return answer;
}