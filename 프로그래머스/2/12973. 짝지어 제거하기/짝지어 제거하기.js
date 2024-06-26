function solution(s) {
    if (s.length % 2 === 1) return 0;
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        stack.length === 0
            ? stack.push(s[i])
            : stack[stack.length - 1] === s[i]
                ? stack.pop()
                : stack.push(s[i]);
    }
    
    return stack.length === 0 ? 1 : 0;
}

