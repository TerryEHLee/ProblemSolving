function solution(arr) {
    var answer = 0;
    
    while(!arr.every(ele => (ele < 50 && ele % 2 === 0) || (ele >= 50 && ele % 2 === 1))) {
        arr = arr.map(ele => {
            return ele >= 50 && ele % 2 === 0 ? ele / 2:
                    ele < 50 && ele % 2 === 1 ? ele * 2 + 1 :
                    ele
        })
        answer++
    }
    return answer;
}