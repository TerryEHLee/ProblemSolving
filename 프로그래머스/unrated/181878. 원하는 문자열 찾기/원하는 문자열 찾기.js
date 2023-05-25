function solution(myString, pat) {
    var answer = 0;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    answer = myString.includes(pat);
    
    return +answer;
}
