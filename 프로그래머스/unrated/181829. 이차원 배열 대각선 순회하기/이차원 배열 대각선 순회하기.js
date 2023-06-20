function solution(board, k) {
  var answer = 0;

  board.forEach((boa, i) => {
    boa.forEach((ele, j) => {
      if (i + j <= k) {
        answer += ele;
      }
    });
  });

  return answer;
}