function solution(absolutes, signs) {
    var answer = 0;
    var nums = [];
    
    for (i = 0; i < signs.length; i++) {
        if (signs[i] === true) {
            nums.push(absolutes[i])
        } else {
            nums.push(absolutes[i] * -1)
        }
    }
    for (j = 0; j < nums.length; j++) {
        answer += nums[j]
    }
    return answer;
}