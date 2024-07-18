function solution(k, score) {
    
    let answer = [];
    let hof = []
    
for (let i =0; i < score.length; i++){
    if (hof.length < k) {
        hof.push(score[i])
    }
        else {
            if (hof[0] < score[i]) {
            hof.push(score[i])
                hof.shift()
            } 
        }
    hof.sort((a,b) => a - b)
    answer.push(hof[0])
    }
    
    
    return answer;
}