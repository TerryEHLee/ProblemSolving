function solution(sizes) {
    var answer = 0;

    let big = [], small = [];
    
    sizes.forEach(ele => {
        ele[0] > ele[1] ? (big.push(ele[0]), small.push(ele[1])) : (big.push(ele[1]), small.push(ele[0]))
    })
    
    let bigSize = big[0], smallSize = small[0];
    
    for (let i = 0; i < big.length - 1; i++) {
        bigSize < big[i+1] ? bigSize = big[i + 1] : bigSize   
        console.log(bigSize)
    }
    
    for (let i = 0; i < small.length - 1; i++) {
        smallSize < small[i+1] ? smallSize = small[i + 1] : smallSize   
        console.log(smallSize)
    }
    
    console.log(big)
    answer = bigSize * smallSize
    return answer;
}

// sizes 요소들을 큰 것과 작은 것으로 분류
// 큰 것중에 가장 큰 값과 작은 것 중 가장 작은 것을 뽑아 곱함