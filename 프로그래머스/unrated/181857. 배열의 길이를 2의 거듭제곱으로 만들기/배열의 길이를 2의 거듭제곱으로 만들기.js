function solution(arr) {
    var answer = arr;
    var length = arr.length
    
    var zeros = Math.pow(2, Math.ceil(Math.log2(length))) - length;
    
    for (i = 0; i < zeros; i++) {
        arr.push(0)
    }
     
    answer = Math.log2(length) % 1 === 0 ? answer : arr
    return answer;
}