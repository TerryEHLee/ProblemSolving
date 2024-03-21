function solution(A, B) {
    if(A===B){
        return 0
    }
    let answer = -1
    for(let i=1;i<A.length;i++){
        const pushString = A.slice(-i)
        const pushedString = A.slice(0,A.length - i)
        if(pushString.concat(pushedString) === B){
            answer = i
            break
        }
    }
    return answer
}