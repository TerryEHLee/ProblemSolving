function solution(arr1, arr2) {
    var answer = 0;
    let leng1 = arr1.length;
    let leng2 = arr2.length;
    let sum1 = 0
    let sum2 = 0
    
    arr1.forEach(ele => {
        sum1 += ele
    })
    arr2.forEach(ele => {
        sum2 += ele
    })
    
    switch (true) {
        case leng1 > leng2: answer = 1
            break
        case leng1 === leng2:
        answer = sum1 > sum2 ? 1: sum1 === sum2 ? 0 : -1
            break
        default: answer = -1
    } 
    return answer;
}