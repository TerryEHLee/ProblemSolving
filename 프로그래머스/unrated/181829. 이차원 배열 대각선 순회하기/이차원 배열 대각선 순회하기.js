function solution(board, k) {
    var answer = 0;
    
    board.forEach((ind, i)=> {
        ind.forEach((id, j) => {
            i + j <= k ? answer += id : answer;
        })
    }) 
    
    return answer;
}