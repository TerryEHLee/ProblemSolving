function solution(s) {
    var answer = [];
    let arr = s.split('')
    let i = 0;
    
    arr.forEach(alp => {
        if (alp !== ' ') {
            i % 2 === 0 ? answer.push(alp.toUpperCase()) : answer.push(alp.toLowerCase())
            i++
        } else {
            answer.push(' ')
            i = 0
        }
    })
    
    return answer.join('');
}