function solution(binomial) {
    var answer = 0;
    let arr = binomial.split(' ');
    
    switch (arr[1]) {
        case ('+'): answer = +arr[0] + +arr[2]; break;
        case ('-'): answer = +arr[0] - +arr[2]; break;
        case ('*'): answer = +arr[0] * +arr[2]; break;
        case ('/'): answer = +arr[0] / +arr[2]; break;
        default: answer
    }
    
    
    return answer;
}