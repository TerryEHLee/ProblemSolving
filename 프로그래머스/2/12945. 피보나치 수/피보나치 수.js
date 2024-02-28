function solution(n) {
  let a = 0, b = 1, answer = 0;

  for (let i = 2; i <= n; i++) {
    answer = (a + b) % 1234567;
    a = b;
    b = answer;
  }

  return answer;
}
