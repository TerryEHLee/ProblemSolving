function solution(s) {
    if (s.length % 2 === 1) return 0;
    const bracket = {'(':')', '{':'}', '[':']'};    
        
    const check = (str) => {
        let stack = [];
        for (let bra of str) {
            if (bra in bracket) {
                stack.push(bra);
            } else {
                if (stack.length === 0 || bracket[stack.pop()] !== bra) {
                    return false;
                }
            }
        }    
        return stack.length === 0;
    }
    
    let answer = 0;
    
    for (let i = 0; i < s.length; i++) {
        let rotated = s.slice(i) + s.slice(0, i);
        if (check(rotated)) {
            answer++;
        }
    }
    
    return answer;
}

