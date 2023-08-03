function solution(keyinput, board) {
    var answer = [];
    let row = 0;
    let col = 0;
    
    keyinput.forEach(key => {
        key === 'left' ? row-- : key === 'right' ? row++ : key === 'up' ? col++ : col--
        if (Math.abs(row) > ~~(board[0]/2)) {
        row > 0 ? row = ~~(board[0]/2) : row = ~~(board[0]/2)*-1
    }
     if (Math.abs(col) > ~~(board[1]/2)) {
        col > 0 ? col = ~~(board[1]/2) : col = ~~(board[1]/2)*-1
    }   
    })
    
    
        answer[0] = row
    
    
   
        answer[1] = col
    
    
    return answer;
}