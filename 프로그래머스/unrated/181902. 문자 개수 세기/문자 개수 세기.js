function solution(my_string) {
  var countArr = new Array(52).fill(0);
  
  for (var i = 0; i < my_string.length; i++) {
    var charCode = my_string.charCodeAt(i);
    
    if (charCode >= 65 && charCode <= 90) {
      countArr[charCode - 65]++;
    } else if (charCode >= 97 && charCode <= 122) {
      countArr[charCode - 71]++;
    }
  }
  
  return countArr;
}
