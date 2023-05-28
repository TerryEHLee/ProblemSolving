function solution(myString, pat) {
    var answer = 0;
    var changed = ''
    
    for (i = 0; i < pat.length; i++) {  
        if (pat[i] === 'A') {
            changed += 'B'
        } else {
            changed += 'A'
        }
    }
    
    answer = myString.includes(changed) ? 1 : 0
    return answer;
}