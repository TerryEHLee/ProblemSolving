function solution(rsp) {
    var answer = '';
   [...rsp].map(x => x === '2' ? answer += 0 : x === '0' ? answer += 5 : answer += 2)
    return answer;
}