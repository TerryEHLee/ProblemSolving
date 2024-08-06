function solution(nums) {
    var answer = 0;
    const obj = nums.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {})

    answer = Object.entries(obj).length >= nums.length/2 ? nums.length/2 : Object.entries(obj).length
    console.log(Object.entries(obj).length)
    return answer;
}