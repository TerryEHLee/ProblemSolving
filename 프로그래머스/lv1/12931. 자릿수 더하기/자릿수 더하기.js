function solution(n) {
  var answer = 0;
  let num = String(n);

  [...num].forEach(i => {
    answer += Number(i);
  });

  return answer;
}
