function solution(s) {
    var answer = [];
    let hash = {};
    
    [...s].forEach((str, idx) => {
        if (hash[str] !== undefined) {
            answer.push(idx - hash[str]);
        } else {
            answer.push(-1);
        }
        hash[str] = idx; // 현재 문자의 인덱스를 저장
    });
    return answer;
}