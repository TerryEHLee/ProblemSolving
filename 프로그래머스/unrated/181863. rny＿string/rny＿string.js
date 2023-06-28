function solution(rny_string) {
    var answer = '';
    
    for (str in rny_string) {
        answer += rny_string[str] === 'm' ? 'rn' : rny_string[str]
    }
    return answer;
}