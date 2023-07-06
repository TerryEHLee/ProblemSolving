function solution(n_str) {
    var answer = '';
    let ind = 0;
    
    while (n_str[ind] === '0') {
        ind++
    }
    
    answer = n_str.slice(ind)
    
    return answer;
}