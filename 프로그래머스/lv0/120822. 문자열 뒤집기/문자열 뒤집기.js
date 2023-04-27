function solution(my_string) {
  var reversed = "";
  for (var i = my_string.length - 1; i >= 0; i--) {
    reversed += my_string[i];
  }
  return reversed;
}
