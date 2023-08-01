function solution(my_string, letter) {
    var answer = '';
    
    answer = [...my_string].filter(str=> str !== letter)
    return answer.join('');
}