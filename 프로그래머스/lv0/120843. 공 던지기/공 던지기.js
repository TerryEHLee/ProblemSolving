function solution(numbers, k) {
    var answer = 0;
    let arr = [];
    
    for (i = 0; i < k; i++) {
        numbers.forEach(num => {
            arr.push(num)
        })
        
    }
    
    
    answer = arr[2*k-2]
    return answer;
}

