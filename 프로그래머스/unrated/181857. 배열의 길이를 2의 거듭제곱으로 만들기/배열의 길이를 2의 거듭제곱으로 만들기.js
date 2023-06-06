function solution(arr) {
  const length = arr.length;
  
  // arr의 길이가 이미 2의 거듭제곱이라면 원본 배열 그대로 반환
  if (Math.log2(length) % 1 === 0) {
    return arr;
  }
  
  // 필요한 0의 개수 계산
  const neededZeros = Math.pow(2, Math.ceil(Math.log2(length))) - length;
  
  // 0 추가
  for (let i = 0; i < neededZeros; i++) {
    arr.push(0);
  }
  
  return arr;
}
