function solution(arr, queries) {
  var answer = arr.slice();
  
  for (var i = 0; i < queries.length; i++) {
    var index1 = queries[i][0];
    var index2 = queries[i][1];
    
    var temp = answer[index1];
    answer[index1] = answer[index2];
    answer[index2] = temp;
  }
  
  return answer;
}
