function solution(hp) {
    var answer = 0;
    let general = 0
    let soldier = 0
    let worker = 0
    
    general = parseInt(hp / 5) 
    soldier = parseInt(((hp - (general * 5))) / 3)
    worker = hp - general * 5 - soldier * 3
    
    answer = general + soldier + worker
    
    return answer;
}