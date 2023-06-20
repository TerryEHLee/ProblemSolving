function solution(arr) {
    var answer = [[]];
    
    let row = arr.length
    let col = arr[0].length
    
    if (row > col) {
        arr.forEach(ele => {
            ele.push(...Array(row-col).fill(0))
        })
    } else if (row < col) {
        for (i = 0; i < col-row; i++) {
        arr.push(Array(col).fill(0))        
    }}
    
        
    return arr;
}