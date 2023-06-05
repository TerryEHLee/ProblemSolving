function solution(arr, k) {
  var answer = [];
  var uniqueSet = new Set();

  for (var i = 0; i < arr.length; i++) {
    if (!uniqueSet.has(arr[i])) {
      uniqueSet.add(arr[i]);
      answer.push(arr[i]);
    }

    if (answer.length === k) {
      break;
    }
  }

  while (answer.length < k) {
    answer.push(-1);
  }

  return answer;
}
