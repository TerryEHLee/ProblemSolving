function solution(my_string) {
    var answer = '';
    let string = my_string.split('')
    string = string.map((char) => char.toLowerCase())
    answer = string.sort().join('');
    return answer;
}
