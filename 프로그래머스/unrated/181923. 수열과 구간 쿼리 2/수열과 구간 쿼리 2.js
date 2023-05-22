function solution(arr, queries) {
  var answer = [];

  for (i = 0; i < queries.length; i++) {
    var num = [];

    for (j = queries[i][0]; j <= queries[i][1]; j++) {
      if (arr[j] > queries[i][2]) {
        num.push(arr[j]);
      }
    }

    if (num.length > 0) {
      answer.push(Math.min(...num));
    } else {
      answer.push(-1);
    }
  }

  return answer;
}
