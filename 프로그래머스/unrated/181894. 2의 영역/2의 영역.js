function solution(arr) {
    var answer = [];
    let twos = [];
    
    arr.forEach((ele, i) => {
        ele === 2 && twos.push(i)
    })
    
    switch (twos.length) {
        case 1: answer = [2]; break
        case 0: answer = [-1]; break
        default:
            answer = arr.slice(twos[0], twos[twos.length-1] + 1)
    }
    return answer;
}