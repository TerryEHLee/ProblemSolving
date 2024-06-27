function solution(polynomial) {
  let xnum = 0;
  let constNum = 0;
  polynomial.split(' + ').forEach(c => {
    if (/^\d+$/.test(c)) { // 숫자만 있는 경우
      constNum += parseInt(c, 10);
    } else { // 'x'를 포함하는 경우
      xnum = c === 'x' ? xnum + 1 : xnum + parseInt(c.slice(0, -1), 10);
    }
  });
  if (xnum === 0) {
    return String(constNum);
  } else if (xnum === 1) {
    return constNum !== 0 ? `x + ${constNum}` : 'x';
  } else {
    return constNum !== 0 ? `${xnum}x + ${constNum}` : `${xnum}x`;
  }
}