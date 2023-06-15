function solution(date1, date2) {
    var answer = 0;
    
    switch (true) {
        case date1[0] < date2[0]:
            answer = 1;
            break;
        case date1[0] === date2[0] && date1[1] < date2[1]:
            answer = 1;
            break;
        case date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]:
            answer = 1;
            break;
        default:
            answer = 0;
    }

    return answer;
}
