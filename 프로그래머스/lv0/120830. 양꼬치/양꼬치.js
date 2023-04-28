function solution(n, k) {
    let answer = 0;
    bonus = parseInt(n / 10);
    answer = 12000 * n + 2000 * (k - bonus);
    return answer;
}