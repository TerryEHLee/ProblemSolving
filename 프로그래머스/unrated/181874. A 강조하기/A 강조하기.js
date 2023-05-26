function solution(myString) {
    var answer = '';
    
    for (var i = 0; i < myString.length; i++) {
        var str = myString[i];
        
        if (str === 'a') {
            answer += str.toUpperCase();
        } else if (str !== 'A' && str === str.toUpperCase()) {
            answer += str.toLowerCase();
        } else {
            answer += str;
        }
    }
    
    return answer;
}
