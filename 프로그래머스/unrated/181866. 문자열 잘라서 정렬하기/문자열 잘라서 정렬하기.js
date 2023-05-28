function solution(myString) {
    var answer = [];
    var arr = myString.split('x');
    
    answer = arr.filter(element => element !== '').sort();
    
    return answer;
}

