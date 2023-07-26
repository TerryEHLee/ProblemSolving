function solution(array) {
    var answer = 0;
    let index = parseInt(array.length/2)
    
    sortedArray = array.sort((a,b)=>a-b)
    answer = sortedArray[index]
    
    
    return answer;
}