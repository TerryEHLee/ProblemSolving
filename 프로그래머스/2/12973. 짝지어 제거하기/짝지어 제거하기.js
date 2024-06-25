function solution(s) {
      if (s.length % 2 === 1) return 0;
    
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop(); // 짝지어 제거
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}