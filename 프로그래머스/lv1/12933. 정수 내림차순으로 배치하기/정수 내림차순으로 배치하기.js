function solution(n) {
    var answer = 0;
    answer = +[...String(n)].sort().reverse().join('')
    return answer;
}