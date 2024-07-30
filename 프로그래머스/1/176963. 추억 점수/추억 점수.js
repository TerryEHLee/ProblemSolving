function solution(name, yearning, photo) {
    var answer = [];
    
    for (let ele of photo) {
        let score = 0;
        for (let i = 0; i < ele.length; i++) {
            const index = name.indexOf(ele[i]);
            if (index !== -1){ 
            score += yearning[name.indexOf(ele[i])];
            }
        }
        answer.push(score)
        console.log(score)
    }
    return answer;
}