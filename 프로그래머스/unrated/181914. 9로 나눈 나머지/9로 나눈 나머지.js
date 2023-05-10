function solution(number) {
  const digitSum = Array.from(number).reduce((sum, digit) => sum + parseInt(digit), 0);
  const remainder = digitSum % 9;
  return remainder;
}
