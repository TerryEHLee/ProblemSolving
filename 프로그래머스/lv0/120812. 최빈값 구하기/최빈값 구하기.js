function solution(array) {
    let count = {};
    let maxCount = 0;
    let maxnum = 0;
    
    array.forEach(num => {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
        
        if (count[num] > maxCount) {
            maxCount = count[num];
            maxNum = num;
        } else if (count[num] === maxCount) {
            maxNum = -1;
        }
    }
                 )
        return maxNum;
}