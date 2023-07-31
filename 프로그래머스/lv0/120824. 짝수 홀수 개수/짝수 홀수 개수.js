function solution(num_list) {
    var answer = [];
    let add = 0;
    let odd = 0;
    
    num_list.forEach(num => {
        num % 2 === 0 ? add++:odd++
    })
    answer.push(add)
    answer.push(odd)
    return answer;
}