function solution(picture, k) {
  const enlargedPicture = [];

  for (const row of picture) {
    const enlargedRow = [];

    for (const char of row) {
      enlargedRow.push(char.repeat(k));
    }

    for (let i = 0; i < k; i++) {
      enlargedPicture.push(enlargedRow.join(''));
    }
  }

  return enlargedPicture;
}