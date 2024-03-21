function solution(quiz) {
    var answer = [];
    let arr = [];
    
    arr = quiz.map(ele => ele.split(' '));
   
    for (let i = 0; i < quiz.length; i++) {
        arr[i][1] === '+' ?
            (+arr[i][0] + +arr[i][2] === +arr[i][4] ?
            answer.push("O") : answer.push("X"))
        : (+arr[i][0] - +arr[i][2] === +arr[i][4] ?
            answer.push("O") : answer.push("X"))
        console.log(+arr[i][0] - +arr[i][2])
    }
   
    
    return answer;
}
