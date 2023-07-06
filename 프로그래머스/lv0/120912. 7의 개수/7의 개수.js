function solution(array) {
    var answer = 0;
    
    array.forEach(arr => {
        answer += String(arr).split('7').length - 1;
    });
    
    return answer;
}
