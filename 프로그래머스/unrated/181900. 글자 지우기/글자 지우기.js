function solution(my_string, indices) {
  var result = '';
  for (var i = 0; i < my_string.length; i++) {
    if (!indices.includes(i)) {
      result += my_string[i];
    }
  }
  return result;
}
