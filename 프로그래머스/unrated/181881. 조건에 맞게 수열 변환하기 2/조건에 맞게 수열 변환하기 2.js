function solution(arr) {
    var count = 0;
    
    while (true) {
        var nextArr = arr.map(function(num) {
            if (num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 === 1) {
                return num * 2 + 1;
            } else {
                return num;
            }
        });
        
        count++;
        
        if (nextArr.every(function(num, index) { return num === arr[index]; })) {
            break;
        }
        
        arr = nextArr;
    }
    
    return count - 1;
}
