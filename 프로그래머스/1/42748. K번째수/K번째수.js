function solution(array, commands) {
    var answer = [];
    
    commands.forEach(arr => {
        let splicedArr = array.slice(arr[0] - 1, arr[1] )
        splicedArr = splicedArr.sort((a,b) => a - b)
        answer.push(splicedArr[arr[2] - 1])
    })
    return answer;
}