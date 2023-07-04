function solution(arr) {
    var answer = arr;
    let length = arr.length;
    
    let zeros = Math.pow(2, Math.ceil(Math.log2(length))) - length;
    
    for (i = 0; i < zeros; i++) {
        arr.push(0)
    }
    
   return Math.log2(length) % 1 === 0 ? answer : arr
   
}