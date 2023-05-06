function solution(num_list) {
    var answer = 0;
    let even = ''
    let odd = ''
    
    for (i = 0; i < num_list.length; i++) {
        num_list[i] % 2 === 0 ? even += String(num_list[i]) : odd += String(num_list[i])
    }
    return +even + +odd;
}