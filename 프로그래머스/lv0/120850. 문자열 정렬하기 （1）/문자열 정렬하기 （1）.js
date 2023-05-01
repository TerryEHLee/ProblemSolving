function solution(my_string) {
    var answer = [];
    let string = my_string.split('')
    for (i = 0; i < my_string.length; i++) {
        if (!isNaN(parseInt(string[i]))) {
            answer.push(parseInt(string[i]))
        }
    }
    answer.sort((a,b) => a - b) 
    return answer;
}