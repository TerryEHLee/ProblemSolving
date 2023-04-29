function solution(age) {
  let answer = '';
  let str = age.toString()
    str = str.split('')
    
    for (i = 0; i < str.length; i++) {
        str[i] = parseInt(str[i])
    }
    
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    for (num of str) {
        answer += alphabet[num]
    }
  return answer;
}
