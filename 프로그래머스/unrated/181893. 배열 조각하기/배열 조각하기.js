function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    const index = query[i];
    if (i % 2 === 0) {
      arr = arr.slice(0, index + 1);
    } else {
      arr = arr.slice(index);
    }
  }
  return arr;
}
