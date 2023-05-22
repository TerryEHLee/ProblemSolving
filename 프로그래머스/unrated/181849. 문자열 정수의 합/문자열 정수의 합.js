function solution(num_str) {
    var answer = 0;
    var num = num_str.split('')
    
    for (i = 0; i < num.length; i++) {
        answer += +num[i]
    }
    return answer;
}