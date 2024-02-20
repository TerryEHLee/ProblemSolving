function solution(t, p) {
    var answer = 0;
    
    const findStrings = () => {
        const strs = [];
        for (i = 0; i <= t.length - p.length; i++) {
            strs.push(t.slice(i,i+p.length))
        }
        return strs
    }
    
    const strs = findStrings();
    
    strs.forEach(str => {
        +str <= +p ? answer++ : answer
    })
    return answer;
}