function solution(A,B){
    var answer = 0;
    let arA = A.sort((a,b)=>a-b)
    let arB = B.sort((a,b)=>b-a)
        
    for (i = 0; i < A.length; i++) {
        answer += arA[i] * arB[i]
    }
    
    console.log('Hello Javascript')

    return answer;
}