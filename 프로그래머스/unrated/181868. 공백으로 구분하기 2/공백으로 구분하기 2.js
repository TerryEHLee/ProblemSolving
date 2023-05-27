function solution(my_string) {
    var answer = [];
    var arr = my_string.split(' ')
    
    arr.forEach(ele => {
        ele !== '' && answer.push(ele)
    })
    return answer;
}