function solution(num_list) {
    
    let add = 0;
    let odd = 0;
    
    for (i=0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            add += 1
        } else {
            odd += 1
        }
    }
    return [add, odd];
}