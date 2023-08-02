function solution(emergency) {
    var answer = [];
    let arr = emergency.slice().sort((a,b) => b - a)
    
    // for (i = 0; i < emergency.length; i++) {
    //     answer.push(emergency[i].indexOf(arr[i]))
    // }
    answer = emergency.map(ele => arr.indexOf(ele)+1)
    return answer;
}