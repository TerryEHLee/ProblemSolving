function solution(id_pw, db) {
    var answer = '';
    
    db.forEach(ele => {
        ele[0] === id_pw[0] && ele[1] === id_pw[1] ?
            answer += 'login' :
        ele[0] === id_pw[0] && ele[1] !== id_pw[1] ?
            answer += 'wrong pw' : answer += 'fail'
    })
    
    answer.includes('login') ? answer = 'login' : answer.includes('wrong pw') ? answer = 'wrong pw' : answer = 'fail'
    return answer;
}