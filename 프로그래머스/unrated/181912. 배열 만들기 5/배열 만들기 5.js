function solution(intStrs, k, s, l) {
  var answer = [];
  for (var i = 0; i < intStrs.length; i++) {
    var num = intStrs[i];
    var com = '';
    for (var j = s; j < s + l; j++) {
      com += num[j];
    }
    if (Number(com) > k) {
      answer.push(+com);
    }
  }
  return answer;
}
