function solution(myStr) {
    var answer = [];
    myStr = myStr.split('a').join(' ')
    myStr = myStr.split('b').join(' ')
    myStr = myStr.split('c').join(' ')
    myStr = myStr.split(' ')
    
    myStr.forEach(ele => {
       ele !== '' && answer.push(ele)
    })
    answer.length === 0 && answer.push('EMPTY')
    return answer;
}