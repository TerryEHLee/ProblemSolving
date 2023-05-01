function solution(num, k) {
    var answer = 0;
    let index = 0
    num
    for (i = 0; i < num ; i++) {
        if (String(num)[i] === String(k)) {
            answer = i + 1
            break
        } else {
            answer = -1
        }
    }
    return answer;
}