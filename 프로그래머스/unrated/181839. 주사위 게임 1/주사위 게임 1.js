function solution(a, b) {
    var answer = 0;
    
    switch (true) {
        case (a % 2 === 1 && b % 2=== 1 ):
            answer = a*a + b*b; break;
            case (a % 2 === 0 && b % 2=== 0):
             answer = Math.abs(a-b); break;
            default:answer = 2*(a + b);
            
    }
    
    return answer;
}