function solution(price) {
  let answer = 0;
  switch (true) {
    case price >= 500000:
      answer = price * 0.8;
      break;
    case price >= 300000:
      answer = price * 0.9;
      break;
    case price >= 100000:
      answer = price * 0.95;
      break;
    default:
      answer = price;
      break;
  }
  return parseInt(answer);
}
