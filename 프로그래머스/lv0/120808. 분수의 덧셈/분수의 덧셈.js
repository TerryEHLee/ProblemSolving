function solution(numer1, denom1, numer2, denom2) {
    
    0 < numer1, denom1, numer2, denom2 && numer1, denom1, numer2, denom2 < 1000;
    
    
    upperCalculation = numer1 * denom2 + numer2 * denom1;
    underCalculation = denom1* denom2;
    
    for (i = underCalculation; i>1; i--)
        if (upperCalculation % i == 0 && underCalculation % i == 0) {
            upperCalculation /= i
            underCalculation /= i
        }

    var answer = [upperCalculation, underCalculation];
    return answer;
}