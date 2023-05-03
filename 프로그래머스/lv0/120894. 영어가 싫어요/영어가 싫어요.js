function solution(numbers) {
    var answer = '';
    const numberMap = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    
    for (i = 0; i < numbers.length; i++) {
        for (let key in numberMap) {
            if (numbers.startsWith(key, i)) {
                answer += numberMap[key]
                i += key.length - 1
                break
            }
        }
    }
    return parseInt(answer);
}