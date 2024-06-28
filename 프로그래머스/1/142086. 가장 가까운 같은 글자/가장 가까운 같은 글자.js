function solution(s) {
    let result = [];
    for (let i = 0; i < s.length; i++) {
        let pos = -1;
        for (let j = i - 1; j >= 0; j--) {
            if (s[i] === s[j]) {
                pos = i - j;
                break;
            }
        }
        result.push(pos === -1 ? -1 : pos);
    }
    return result;
}