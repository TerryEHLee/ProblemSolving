function solution(n) {
    
    let townNumber = 1;
    let Number = 1;
    
    
    while(n > Number) {
        Number++;
        townNumber++
    
    
    while(townNumber % 3 === 0 || String(townNumber).includes('3')) {
        townNumber++
    }
    }
    var answer = townNumber;
    return answer;
}