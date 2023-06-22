function solution(n) {
    var answer = [];
    n = String(n)
    return [...n].reverse().map(Number);
}