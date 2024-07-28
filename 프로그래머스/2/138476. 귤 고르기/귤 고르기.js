function solution(k, tangerine) {
    var answer = 0;
    
    let cnt = 0;
    let obj = {};
    for (let i = 0; i < tangerine.length; i++) {
        obj[tangerine[i]] = (obj[tangerine[i]] || 0) + 1
    }
    
    const sorted = Object.values(obj).sort((a,b) => b - a);
    
    for (let item of sorted){
        if (k <= cnt) {
            return answer;
        }
            cnt += item
            answer++
    }
    
    return answer;
}
