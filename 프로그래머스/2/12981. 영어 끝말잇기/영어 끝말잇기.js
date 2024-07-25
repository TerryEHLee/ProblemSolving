function solution(n, words) {
    var answer = [];
    let count = 0;
    let isTrue = true;  // isTrue를 함수 시작 부분으로 이동
    for (let i = 1; i < words.length; i++) {
        count++;    
        
        let prevWord = words[i-1][words[i-1].length-1];
        if (prevWord !== words[i][0]) {
            answer.push(count % n + 1);
            answer.push(parseInt(count/n)+1);
            isTrue = false;
            break;
        } else {
            for (let j = 0; j < i; j++) {
                if (words[i] === words[j]) {
                    answer.push(count % n + 1);
                    answer.push(parseInt(count/n)+1);
                    isTrue = false;
                    break;
                } 
            }
            if (!isTrue) break;  // 내부 루프에서 탈락자가 발견되면 외부 루프도 종료
        } 
    }
    return isTrue ? [0,0] : answer;
}