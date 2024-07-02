function solution(food) {
    var answer = '';
    let str = '';
    
    for (let i = 1; i < food.length; i++) {
        if (food[i] !== 1) {
            for (let j = 0; j < Math.floor(food[i]/2); j++) {
            str += i;                
            }
        }
    }
    
    answer = str + '0' + [...str].reverse().join('')
    return answer;
}