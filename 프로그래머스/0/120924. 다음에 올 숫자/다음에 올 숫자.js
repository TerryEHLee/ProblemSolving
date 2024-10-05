function solution(common) {
    var answer = 0;
    
    const isSub = (common) => {
        return(common[1] - common[0] === common[2] - common[1])
    }
    

    {
        isSub(common) ?
            answer = common[common.length-1] + common[1] - common[0] :
        answer = common[common.length - 1 ]*(common[1]/common[0])
    }
    
    return answer;
}