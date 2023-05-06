function solution(num_list) {
    var answer = 0;
    let multiply = 1
    let sum = 0
    
    for (i = 0; i < num_list.length; i++) {
        multiply *= num_list[i]
        sum += num_list[i] 
    }
    return multiply > sum * sum ? 0 : 1;
}