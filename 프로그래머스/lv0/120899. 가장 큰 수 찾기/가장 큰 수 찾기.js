function solution(array) {
    var answer = [];
    let max = Math.max(...array)
    let id = array.indexOf(max)
    return [max, id];
}