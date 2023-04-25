function solution(array) {
    
    array = array.sort(function(a, b) {
               return a - b;
               });
    
    middleIndex = parseInt(array.length/2)
    
    return array[middleIndex];
}