function solution(balls, share) {
    var answer = 1;
    
    for (i = 1; i <= balls; i++) {
        answer*=i
    }
    
    for (ia = 1; ia <= share; ia++) {
        answer /= ia 
    }
    
    for (id = 1; id <= balls-share; id++) {
        answer /= id
    }
    
    return Math.round(answer);
}