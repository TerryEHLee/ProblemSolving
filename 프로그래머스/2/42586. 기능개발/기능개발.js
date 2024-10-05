function solution(progresses, speeds) {
    var answer = [];
    let deploy = []; 
    
    for (let i = 0; i < progresses.length; i++) {
        deploy.push(Math.ceil((100 - progresses[i])/speeds[i]))
    }
    
    while (deploy.length) {
        let num = 0;
        
    for (let i = 0; i < deploy.length; i++) {
        let first = deploy[0];
        if (first >= deploy[i]) {
          num++;
        } else {
            break;
        }
        console.log(i, deploy, num)
    }
        answer.push(num);
        for (let i = 0; i < num; i++) {
            deploy.shift();
        }
    }
    return answer;
}