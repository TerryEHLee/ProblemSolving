function solution(my_string) {
    var answer = '';
    let string = my_string.split('')
    let index = []
    for (i = 0; i < string.length; i++) {
        for (j = i + 1; j <= string.length; j++) {
            if (string[i] === string[j]) {
                string.splice(j,1)
                j--
            }
        }
        answer = string.join('')
    }
    return answer;
}