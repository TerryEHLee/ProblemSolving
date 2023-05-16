function solution(arr) {
    var answer = [];
    let id = []
    
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            id.push(i)
        }
    }
        switch (id.length) {
            case 1: answer.push(2)
                break
            case 0: answer.push(-1)
                break
                default: answer = (arr.slice(id[0], id[id.length - 1] + 1))
        }
    
    return answer;
}