function solution(my_string, s, e) {
    var answer = '';
    let left = ''
    let mid = ''
    let right = ''
    
    for (id = 0; id < s; id++) {
        left += my_string[id]
    }
    for (i = s; i <= e; i++) {
        mid += my_string[i]
    }
    for (j = e + 1; j < my_string.length; j++) {
        right += my_string[j]
    }
    answer = left + mid.split('').reverse().join('') + right
    return answer;
}