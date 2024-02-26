function solution(a, b) {
    let copyA=a,copyB = b

    for(let i=2;i<=a;i++){
        if(copyA%i ===0 && copyB%i === 0){
            copyA/=i
            copyB/=i
            i--
        }
    }

    // 기약분수 분모 
    let denominator = copyB

    while(denominator % 2 === 0){
        denominator /= 2
    }

    while(denominator % 5 === 0){
        denominator /= 5
    }

    return denominator === 1 ? 1 : 2
}