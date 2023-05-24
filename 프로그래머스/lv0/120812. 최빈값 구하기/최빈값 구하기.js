function solution(array) {
    var count = {}
    var maxCnt = 0
    var answer = 0;

    array.forEach(num => {
        if (count[num]) {
            count[num]++
        } else {
            count[num] = 1
        }
        
        if (count[num] > maxCnt) {
            maxCnt = count[num]
            answer = num
        } else if (count[num] === maxCnt) {
            answer = -1;
        }
    })
    return answer;
}