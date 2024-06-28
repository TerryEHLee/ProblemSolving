function solution(polynomial) {
  // 다항식을 ' + ' 기준으로 분리
  const terms = polynomial.split(' + ');

  // 계수와 상수를 합산하기 위한 변수 초기화
  let coefficientSum = 0;
  let constantSum = 0;

  // 각 항에 대해 순회
  terms.forEach(term => {
    if (term.includes('x')) {
      // 'x'가 포함된 경우, 계수 추출 및 합산
      const coefficient = term === 'x' ? 1 : parseInt(term.slice(0, -1), 10);
      coefficientSum += coefficient;
    } else {
      // 숫자만 있는 경우, 상수 합산
      constantSum += parseInt(term, 10);
    }
  });

  // 결과 문자열 생성
  let result = '';
  if (coefficientSum !== 0) {
    result += `${coefficientSum === 1 ? '' : coefficientSum}x`; // 계수가 1인 경우 숫자 생략
  }
  if (constantSum !== 0) {
    result += result ? ` + ${constantSum}` : `${constantSum}`; // 결과 문자열이 비어있지 않으면 상수 앞에 ' + ' 추가
  }

  return result || '0'; // 모든 항의 합이 0인 경우 '0' 반환
}