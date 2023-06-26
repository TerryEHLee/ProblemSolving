function solution(arr) {
    var answer = [];
    var min = Math.min(...arr);
    
    answer = arr.filter(ele => ele !== min);

    return answer.length === 0 ? [-1] : answer;
}
