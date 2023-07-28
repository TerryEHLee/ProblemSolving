// function solution(spell, dic) {
//     var answer = 0;
    
//     let arr = [];
    
//     for (i = 0; i < dic.length; i++) {
//         dic[i].length === spell.length ? arr.push(dic[i]):arr
//     }
    
//     let spellArr = [spell.sort().join('')];
   
//     arr.forEach(ele => {
        
//         ele.split('').sort().join('') === spellArr[0] ? answer = 1 : answer = 2 
        
//     })
    
//     return answer;
// }

function solution(spell, dic) {
    var answer = 0;
    var tmp = 0;

    for(let i=0; i<dic.length; i++){

        for(let j=0; j<spell.length; j++){
            if(dic[i].indexOf(spell[j]) == -1){
                tmp++;
            } 
        }
        tmp > 0 ? answer = 2 : answer = 1; 
        tmp = 0;
        if(answer == 1) break;
    }

    return answer;
}